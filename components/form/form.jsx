import React from 'react';
import {Formik, Form, Field} from 'formik';
import style from "./form.module.css"
import {TitleBIG} from "../element";

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Введите Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Неверно заполнено поле email';
    }
    return error;
}

function validate(value) {
    let error;
    if (value.length < 10) {
        error = 'Заполните поле';
    }
    return error;
}
function validateCheckbox(value) {
    let error;
    if (value !== true) {
        error = 'Необходимо согласиться с условиями';
    }
    return error;
}

function validatePhone(value) {
    let error;
    if (value.length < 10) {
        error = 'Некорректный номер телефона';
    }
    return error;
}

export const FormHi = () => (
    <div>
        <div >
            <TitleBIG>Форма с приветами</TitleBIG>
        </div>
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: "",
                message: "",
                checkbox: false
            }}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
                alert(JSON.stringify(values))
            }}
        >
            {({errors, touched, isValidating}) => (
                <Form >
                    <div className={style.form}>
                        <label>
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
                                <Field name="name"
                                       placeholder="Ваше имя"
                                       className={style.form_control_input}
                                />
                                <div className={style.text}>Имя нас не сильно волнует и это поле необязательное</div>
                            </div>
                        </label>

                        <label>
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
                                <Field name="phone"
                                       placeholder="Телефон"
                                       className={style.form_control_input + " " + (errors.phone && touched.phone ? style.is_invalid : "")}
                                       validate={validatePhone}/>
                                {errors.phone && touched.phone && <div className={style.mobile_error}>{errors.phone}</div>}
                                <div className={style.text}>Для телефона нужна маска для ввода</div>

                            </div>
                            {errors.phone && touched.phone && <div className={style.desktop_error}>{errors.phone}</div>}
                        </label>


                        <label>
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
                                <Field name="email"
                                       placeholder="Электронная почта"
                                       className={style.form_control_input + " " + (errors.email && touched.email ? style.is_invalid : "")}
                                       validate={validateEmail}/>
                                {errors.email && touched.email && <div className={style.mobile_error}>{errors.email}</div>}
                                <div className={style.text}> Почту нужно валидировать, что пользователь точно указал адекватный и похожий на настоящий адрес </div>

                            </div>
                            {errors.email && touched.email && <div className={style.desktop_error}>{errors.email}</div>}
                        </label>


                        <label>
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
                                <Field name="message"
                                       component="textarea"
                                       rows="4"
                                       placeholder="Сообщение"
                                       className={style.form_control_input + " " + (errors.message && touched.message ? style.is_invalid : "")}
                                       validate={validate}/>
                                {errors.message && touched.message && <div className={style.mobile_error}>{errors.message}</div>}
                                <div className={style.text}>Без сообщения форму отправлять бессмысленно</div>

                            </div>
                            {errors.message && touched.message && <div className={style.desktop_error}>{errors.message}</div>}
                        </label>

                        <label>
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
                                <div className={style.wrapper_checkbox}>
                                    <Field name="checkbox"
                                           className={style.checkbox}
                                           type="checkbox"
                                           validate={validateCheckbox}/>
                                    <div className={style.checkbox_box} />
                                    {errors.checkbox && touched.checkbox && <div className={style.mobile_error}>{errors.checkbox}</div>}
                                    <div className={style.accept}>Согласен с правилами обработки моих персональных данных</div>
                                </div>
                                <div className={style.text}>Форма отправляется только, если отметка с согласием стоит</div>
                            </div>
                            {errors.checkbox && touched.checkbox && <div className={style.desktop_error}>{errors.checkbox}</div>}
                        </label>
                    </div>

                    <div className="d-flex flex-column flex-lg-row align-items-lg-center">

                    <div className={style.wrapper_checkbox}>
                        <button className={style.button_send} type="submit">Отправить сообщение</button>
                    </div>
                    <div className={style.text}> У кнопки несколько состояний. Яркой и синей она становится когда все нормально и форму можно отправлять.</div>
                    </div>

                </Form>
            )}
        </Formik>
    </div>
);