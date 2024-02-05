import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const watchAllFields = watch();

  const fullNameRef = useRef(null);

  useEffect(() => {
    // If the full name field is empty, focus on it
    if (errors.fullName) {
      fullNameRef.current.focus();
    }
  }, [errors]);

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      console.log(data);
      // Redirect or perform the action you want when the form is correctly filled
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Full name"
        error={errors.fullName && "This field is required"}
      >
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: true })}
          ref={fullNameRef}
        />
      </FormRow>

      <FormRow
        label="Email address"
        error={errors.email && "This field is required"}
      >
        <Input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors.password && "This field is required"}
      >
        <Input
          type="password"
          id="password"
          {...register("password", { required: true, minLength: 8 })}
        />
      </FormRow>

      <FormRow
        label="Repeat password"
        error={errors.passwordConfirm && "This field is required"}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", { required: true, minLength: 8 })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
