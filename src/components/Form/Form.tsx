import { TextField } from '../TextField';
import { Checkbox } from '../Checkbox';
import { Toggle } from '../Toggle';
import { RadioButton, RadioGroup } from '../RadioGroup';
import { SelectBox } from '../SelectBox';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import styles from './form.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  username: z.string().min(5, 'Username must be at least 5 characters long!'),
  password: z
    .string()
    .min(4, 'Password must be at least 4 charachers long!')
    .max(12, 'Password is too long!'),
  inputLabel: z.string().optional(),
  remember: z.boolean(),
  switch: z.boolean(),
  someChoice: z.union([z.literal('choice1'), z.literal('choice2'), z.literal('choice3')]),
  dropdownTitle: z.union([
    z.literal('Dropdown option'),
    z.literal('Dropdown option1'),
    z.literal('Dropdown option2'),
  ]),
});

const radioButtons = [
  { id: 'choice1', value: 'choice1', name: 'someChoice', text: 'Radio selection 1' },
  { id: 'choice2', value: 'choice2', name: 'someChoice', text: 'Radio selection 2' },
  { id: 'choice3', value: 'choice3', name: 'someChoice', text: 'Radio selection 3' },
];

const selectOptions = [
  { id: 'dropOpt1', value: 'Dropdown option', text: 'Dropdown option' },
  { id: 'dropOpt2', value: 'Dropdown option1', text: 'Dropdown option1' },
  { id: 'dropOpt3', value: 'Dropdown option2', text: 'Dropdown option2' },
];

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
          type='text'
          label='Username'
          placeholder='Enter username'
          name='username'
          register={register}
          errors={errors}></TextField>
        <TextField
          type='password'
          label='Password'
          placeholder='Enter password'
          name='password'
          register={register}
          errors={errors}></TextField>
        <TextField
          type='text'
          label='Input label'
          placeholder='Enter something'
          name='inputLabel'
          register={register}
          errors={errors}></TextField>
        <Checkbox label='Remember me' name='remember' register={register} />
        <Toggle name='switch' register={register} />
        <RadioGroup>
          {radioButtons.map(({ text, ...rest }, idx) => (
            <RadioButton {...rest} key={idx} defaultChecked={idx === 0} register={register}>
              {text}
            </RadioButton>
          ))}
        </RadioGroup>
        <SelectBox
          name='dropdownTitle'
          title='Dropdown Title'
          register={register}
          options={selectOptions}
        />
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
