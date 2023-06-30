/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginEmail = (props: { choosevalidData: any }) => {

  const handleBlur = async (e: any) =>{
    const isok = await /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value);
    console.log(isok, props.choosevalidData, e.target.value);
    await props.choosevalidData(isok);
  }

  return (
    <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3 form-group required">
      <label htmlFor="" className="control-label">
        Correo
      </label>
      <input
        autoFocus
        className="rounded-md"
        type="email"
        placeholder="correo@electronico.srv"
        required={true}
        autoComplete="username"
        onBlur={handleBlur}
      />
    </div>
  );
};

export default LoginEmail;
