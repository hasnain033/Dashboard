import React from "react";
import "./Sidebar.scss";
import { useForm } from "react-hook-form";
import userDataConstructor from "../../Model/userDataConstructor";
import { useEffect } from "react";

const Sidebar = ({ handleCallback, currentId, setcurrentId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const userData = new userDataConstructor(data);
    handleCallback(userData);
    reset({
      type: "line",
      priority: "",
      order: "",
      width: "",
      height: "",
    });
    setcurrentId(null);
  };

  useEffect(() => {
    reset({ ...currentId });
  }, [currentId, reset]);

  return (
    <div className="sidebar">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Chart Type</label>
        <select {...register("type", { required: true })}>
          <option value="line">Line</option>
          <option value="bar">Bar</option>
          <option value="pie">Pie</option>
        </select>
        {errors.chartType && <p>This field is required</p>}

        <label>Priority</label>
        <input type="number" {...register("priority", { required: true })} />
        {errors.priority && <p>This field is required</p>}

        <label>Order</label>
        <input type="number" {...register("order", { required: true })} />
        {errors.order && <p>This field is required</p>}

        <label>Width</label>
        <input
          type="text"
          {...register("width", {
            required: true,
            pattern: {
              value: /^(0(\.\d+)?|1)$/,
              message: "Please enter a number between 0 and 1.",
            },
          })}
        />
        {errors.width && <p>Please enter a number between 0 and 1</p>}

        <label>Height</label>
        <input
          type="text"
          {...register("height", {
            required: true,
            pattern: {
              value: /^(0(\.\d+)?|1)$/,
              message: "Please enter a number between 0 and 1.",
            },
          })}
        />
        {errors.height && <p>Please enter a number between 0 and 1</p>}
        <input type="submit" />
      </form>
    </div>
  );
};
export default Sidebar;
