import { TextField } from '../TextField';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import styles from './form.module.scss';
import { Checkbox } from '../Checkbox/Checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  username: z.string().min(5, 'Username must be at least 5 characters long!'),
  password: z
    .string()
    .min(4, 'Password must be at least 6 charachers long!')
    .max(12, 'Password is too long!'),
  inputLabel: z.string().optional(),
  remember: z.boolean(),
});

export const Form = (props: any) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fields}>
        <TextField
          label='Username'
          placeholder='Enter username'
          name='username'
          register={register}
          errors={errors}></TextField>
        <TextField
          label='Password'
          placeholder='Enter password'
          name='password'
          register={register}
          errors={errors}></TextField>
        <TextField
          label='Input label'
          placeholder='Enter something'
          name='inputLabel'
          register={register}
          errors={errors}></TextField>
        <Checkbox label='Remember me' name='remember' register={register} />
        <div className={styles.controls}>
          <Button styleType='bordered' onClick={() => reset()}>
            Cancel
          </Button>
          <Button styleType='filled' type='submit' disabled={!isValid}>
            Next
          </Button>
        </div>
      </div>
    </form>
  );
};
