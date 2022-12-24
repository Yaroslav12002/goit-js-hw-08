// Пусть ключом для хранилища будет строка "feedback-form-state".
import throttle from 'lodash.throttle';

const FEEDBACKKEY = 'feedback-form-state';
let feedbackFormState = {
  // clear() {
  //   keys = Object.keys(this);
  //   keys.forEach(key => {
  //     // clear all values from object, eccept this function
  //     if (key !== 'clear') {
  //       delete this[key];
  //     }
  //   });
  // },
};

const refs = document.querySelector('.js-feedback-form');

refs.addEventListener('submit', onFormSubmit);
refs.addEventListener('input', throttle(onFormInput, 500));

populateContent();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(feedbackFormState);
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACKKEY);
  feedbackFormState = {};
}

function onFormInput(evt) {
  feedbackFormState[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACKKEY, JSON.stringify(feedbackFormState));
}

function populateContent() {
  const feedback = JSON.parse(localStorage.getItem(FEEDBACKKEY));
  if (!feedback) {
    return;
  }
  //   console.log('feedback', feedback);

  const feedbackKeys = Object.keys(feedback);
  feedbackKeys.forEach(key => {
    const formElement = refs.querySelector(`*[name=${key}]`);
    // console.log(formElement);
    formElement.value = feedback[key];
    feedbackFormState[key] = feedback[key];
  });
}

// const STORAGE_KEY = {
//   email: 'feedback-email',
//   message: 'feedback-msg',
// };

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   emailArea: document.querySelector('.js-feedback-form input'),
//   message: document.querySelector('.js-feedback-form textarea'),
// };
// // console.log(refs.form);
// // console.log('e-mail: ', refs.emailArea);
// // console.log('message: ', refs.message);

// refs.form.addEventListener('submit', onFormSubmit);
// refs.emailArea.addEventListener('input', throttle(onEmailInput, 500));
// refs.message.addEventListener('input', throttle(onMessageInput, 500));

// populateContent();

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   console.log('Вівести данньіе из полей');
//   evt.currentTarget.reset();
//   localStorage.removeItem('feedback-email');
//   localStorage.removeItem('feedback-msg');
// }

// function onEmailInput(evt) {
//   //   console.log(evt.currentTarget.value);
//   localStorage.setItem('feedback-email', evt.target.value);
// }

// function onMessageInput(evt) {
//   console.log(evt);
//   localStorage.setItem('feedback-msg', evt.target.value);
// }

// function populateContent() {
//   const savedEmail = localStorage.getItem('feedback-email');
//   const savedMessage = localStorage.getItem('feedback-msg');

//   if (savedEmail) {
//     refs.emailArea.value = savedEmail;
//   }

//   if (savedMessage) {
//     refs.message.value = savedMessage;
//   }
// }
