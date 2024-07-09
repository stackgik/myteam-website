'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Button from './Button';

type FormData = {
  name: string;
  email: string;
  companyName: string;
  title: string;
  message: string;
};

const ContactForm = () => {
  // prettier-ignore
  const {register, formState: { errors }, handleSubmit } = useForm<FormData>();

  //   prettier-ignore
  const onSubmit: SubmitHandler<FormData> = ( data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-1'>
        <input
          type='text'
          placeholder='Name'
          className={`input_field ${
            errors?.name?.message
              ? 'border-primary-dark-coral placeholder:text-primary-dark-coral'
              : 'border-primary-white'
          }`}
          {...register('name', { required: 'This field is required' })}
        />
        <i>
          <span className='text-primary-light-coral text-[11px] font-semibold'>
            {errors?.name?.message}
          </span>
        </i>
      </div>

      <div className='flex flex-col gap-1'>
        <input
          type='text'
          placeholder='Email Address'
          className={`input_field ${
            errors?.email?.message
              ? 'border-primary-dark-coral placeholder:text-primary-dark-coral'
              : 'border-primary-white'
          }`}
          {...register('email', { required: 'This field is required' })}
        />
        <i>
          <span className='text-primary-light-coral text-[11px] font-semibold'>
            {errors?.email?.message}
          </span>
        </i>
      </div>

      <div className='flex flex-col gap-1'>
        <input
          type='text'
          placeholder='Company Name'
          className={`input_field ${
            errors?.companyName?.message
              ? 'border-primary-dark-coral placeholder:text-primary-dark-coral'
              : 'border-primary-white'
          }`}
          {...register('companyName', { required: 'This field is required' })}
        />
        <i>
          <span className='text-primary-light-coral text-[11px] font-semibold'>
            {errors?.companyName?.message}
          </span>
        </i>
      </div>

      <div className='flex flex-col gap-1'>
        <input
          type='text'
          placeholder='Title'
          className={`input_field ${
            errors?.title?.message
              ? 'border-primary-dark-coral placeholder:text-primary-dark-coral'
              : 'border-primary-white'
          }`}
          {...register('title', { required: 'This field is required' })}
        />
        <i>
          <span className='text-primary-light-coral text-[11px] font-semibold'>
            {errors?.title?.message}
          </span>
        </i>
      </div>

      <div className='flex flex-col gap-1'>
        <textarea
          id=''
          placeholder='Message'
          {...register('message', { required: 'This field is required' })}
          className={`input_field resize-none ${
            errors?.name?.message
              ? 'border-primary-dark-coral placeholder:text-primary-dark-coral'
              : 'border-primary-white'
          }`}></textarea>
        <i>
          <span className='text-primary-light-coral text-[11px] font-semibold'>
            {errors?.message?.message}
          </span>
        </i>
      </div>

      <div className='mt-8'>
        <Button variation={'secondary'} theme={'light'}>
          submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
