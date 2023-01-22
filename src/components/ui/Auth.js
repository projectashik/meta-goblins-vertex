import {
  ActionIcon,
  Button,
  Modal,
  NumberInput,
  Paper,
  Radio,
  Tabs,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useState } from "react";
import { IconSend } from "../Icons";
import Map from "../map";
import { toast } from "./Toast";
import { signIn } from "next-auth/react";

const Auth = ({ open, setOpen, view = "register" }) => {
  return (
    <Modal title="Authenticate" opened={open} onClose={() => setOpen(false)}>
      <Paper shadow>
        <Tabs defaultValue={view}>
          <Tabs.List>
            <Tabs.Tab value="register">Register</Tabs.Tab>
            <Tabs.Tab value="login">Login</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="register" pt="xs">
            <Register />
          </Tabs.Panel>

          <Tabs.Panel value="login" pt="xs">
            <Login />
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Modal>
  );
};

const Login = () => {
  const form = useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await signIn("credentials", {
        phone: values.phone,
        otp: values.otp,
        callbackUrl: "/",
      });
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const [otpLoading, setOtpLoading] = useState(false);

  const sendOtp = async () => {
    if (!form.values.phone) {
      form.setFieldError("phone", "Phone number is required");
      return;
    }
    setOtpLoading(true);
    try {
      await axios.post("/api/otp", { phone: form.values.phone, type: "login" });
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
      return;
    }
    toast.success("OTP sent successfully");
    setOtpLoading(false);
  };

  return (
    <Paper className="space-y-3">
      <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-3">
        <TextInput
          {...form.getInputProps("phone")}
          label="Phone Number"
          placeholder="9876543210"
          rightSection={
            <Tooltip label="Send OTP">
              <ActionIcon loading={otpLoading} onClick={sendOtp}>
                <IconSend width="15px" height="15px" />
              </ActionIcon>
            </Tooltip>
          }
        />

        <NumberInput
          {...form.getInputProps("otp")}
          label="One Time Password (OTP)"
        />

        <Button type="submit" size="md" color="dark">
          Login
        </Button>
      </form>
    </Paper>
  );
};

const Register = () => {
  const form = useForm({
    initialValues: { role: "individual" },
  });
  const [otpLoading, setOtpLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

  const handleSubmit = async (values) => {
    setLoading(true);
    if (!location && location === null) {
      toast.error("Please select your location");
      setLoading(false);
      return;
    }

    const body = {
      email: values.email,
      phone: values.phone,
      otp: values.otp,
      name: values.name,
      role: values.role,
      latitude: location.lat.toString(),
      longitude: location.lng.toString(),
    };

    try {
      const { data } = await axios.post("/api/register", body);
      toast.success("Registration successful");
      await signIn("credentials", {
        phone: values.phone,
        otp: values.otp,
        callbackUrl: "/",
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };

  const sendOtp = async () => {
    if (!form.values.phone) {
      form.setFieldError("phone", "Phone number is required");
      return;
    }
    setOtpLoading(true);
    await axios.post("/api/otp", { phone: form.values.phone });
    toast.success("OTP sent successfully");
    setOtpLoading(false);
  };
  return (
    <Paper className="space-y-3">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Radio.Group {...form.getInputProps("role")} name="role" withAsterisk>
          <Radio value="individual" label="Individual" />
          <Radio value="vendor" label="Vendor" />
        </Radio.Group>

        <TextInput
          withAsterisk
          {...form.getInputProps("name")}
          label="Name"
          placeholder="Niyoj Oli"
        />

        <TextInput
          withAsterisk
          {...form.getInputProps("email")}
          label="Email"
          placeholder="niyoj@vertexhacks.tech"
        />

        <TextInput
          withAsterisk
          {...form.getInputProps("phone")}
          label="Phone Number"
          placeholder="9876543210"
          rightSection={
            <Tooltip label="Send OTP">
              <ActionIcon loading={otpLoading} onClick={sendOtp}>
                <IconSend width="15px" height="15px" />
              </ActionIcon>
            </Tooltip>
          }
        />
        {form.values.role === "restaurant" && (
          <NumberInput
            withAsterisk
            {...form.getInputProps("pan")}
            label="Pan Number"
          />
        )}

        <NumberInput
          withAsterisk
          {...form.getInputProps("otp")}
          label="One Time Password (OTP)"
        />

        <div className="aspect-square">
          <Text>Click map choose location</Text>
          <Map location={location} setLocation={setLocation} />
        </div>

        <Button type="submit" mt="sm" loading={loading} size="md" color="dark">
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default Auth;
