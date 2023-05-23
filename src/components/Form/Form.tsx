import { TextField } from '../TextField';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import styles from './form.module.scss';
import { Checkbox } from '../Checkbox/Checkbox';

export const Form = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    alert(data);
  };

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fields}>
        <TextField
          label='Username'
          placeholder='Enter username'
          {...register('username')}></TextField>
        <TextField
          label='Password'
          placeholder='Enter password'
          {...register('password')}></TextField>
        <TextField
          label='Input label'
          placeholder='Enter something'
          {...register('inputRandom')}></TextField>
        <Checkbox></Checkbox>
        <div className={styles.controls}>
          <Button type='bordered'>Cancel</Button>
          <Button type='filled'>Next</Button>
        </div>
      </div>
    </form>
  );
};
