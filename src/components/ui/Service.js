const Service = ({icon, title, children}) => {

    const Icon = icon;
  return  <div className='bg-white p-6 rounded-lg border space-y-3 '>
  <div className='bg-primary h-16 w-16 flex items-center justify-center rounded'>
    <Icon width='40' height='40' className='text-white' />
  </div>
  <h3 className='text-2xl font-bold'>{title}</h3>
  <p>
    {children}
  </p>
</div>;
};
export default Service;