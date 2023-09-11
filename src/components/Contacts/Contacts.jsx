import React from 'react';
// import emailjs from '@emailjs/browser'
// styles
import * as styles from "./contacts.module.scss";
import Container from "../Container/Container";
import PhoneInput from "react-phone-number-input";
import {Field, Formik} from "formik";
import MyButton from "../UI/MyButton/MyButton";

const Phone = ({field, form, ...props}) => {
    return (
        <PhoneInput
            placeholder={'Телефон'}
            value=""
            onChange={value => {
                if (!form.touched[field.name]) form.setFieldTouched(field.name);
                form.setFieldValue(field.name, value);
            }}
        />
    );
};

const Contacts = () => {
    const errorObj = {}
    const handleSend = (e,values) =>{
        e.preventDefault()

        // emailjs.sendForm('service_9o14oac', 'template_id', e.target,'public_key')
    }
    return (
    <div className={styles.root}>
        <Container>
            <div className={styles.row}>
                {/*<div className={`${styles.column} ${styles.columnLeft}`}>*/}
                    <div className={styles.topInfo}>
                        <p className={styles.title}>
                            Контакты
                        </p>
                        <p className={styles.subtitle}>
                            Вы можете отправить свой електронный адрес и мы свяжемся с вами.
                        </p>
                    </div>
                    <div className={styles.bottomInfo}>
                        <a href="/">email: info@bioinnova.com.ua</a>
                        <a href="/">+380 95 382 9264 01033</a>
                        <p>місто Київ, ВУЛИЦЯ ТАРАСІВСЬКА, будинок 4-А, офіс 7</p>
                    </div>
                {/*</div>*/}
                <div className={`${styles.column} ${styles.columnRight}`}>
                    <Formik
                        initialValues={{name: "", phone: "", them:"", email: ""}}
                        // validate={values => {
                        //     const errors = {};
                        //     if (!values.email) {
                        //         errors.email = 'Required';
                        //     } else if (
                        //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        //     ) {
                        //         errors.email = 'Invalid email address';
                        //         errorObj.email = 'Invalid email address';
                        //     }
                        //
                        //     if (!values.phone) {
                        //         errors.phone = 'Required';
                        //         errorObj.phone = 'Required';
                        //     }
                        //
                        //     if (!values.name) {
                        //         errors.name = 'Required';
                        //         errorObj.name = 'Required';
                        //     }
                        //
                        //     return errors;
                        // }}
                    >
                        {({

                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <form
                                className={styles.form}
                                onSubmit={(event) => handleSend(event,values)}
                            >
                                <div className={styles.formContainer}>
                                    <div>
                                        <input
                                            className="text24"
                                            type="name"
                                            name="name"
                                            placeholder={'Имя'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        <p className={styles.error}>{errors.name && touched.name && errors.name}</p>

                                    </div>
                                    <div>
                                        <Field name="phone"  component={Phone}/>
                                        <p className={styles.error}>{errors.phone && touched.phone && errors.phone}</p>
                                    </div>

                                    <div>
                                        <input
                                            className="text24"
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <p className={styles.error}>{errors.email && touched.email && errors.email}</p>
                                    </div>
                                    <div>
                                        <input
                                            className="text24"
                                            type="text"
                                            name="them"
                                            placeholder="Тема вебинара или программа"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.them}
                                        />
                                        <p className={styles.error}>{errors.them && touched.them && errors.them}</p>
                                    </div>
                                </div>
                                <MyButton type="submit" golden>Отправить</MyButton>

                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </Container>
    </div>
    );
};

export default Contacts;