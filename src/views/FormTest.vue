<script setup>
import { ref } from 'vue'
import axios from 'axios'
const submitted = ref(false)
const submitHandler = async (formData, node) => {
  // Let's pretend this is an ajax request:
  console.log(formData)
  console.log(node)
  const userObj = { uname: formData.uname, fname: formData.fname, password: formData.password, email: formData.email };
  await axios.post("http://localhost:3000/login", userObj).then(function(response){
               const obj = parseInt(response.data,10);
               console.log(obj)
        }).catch(error => {
  console.error("There was an error!", error);
});
  submitted.value = true
}
</script>

<template>
<div class="container mx-auto">
<div class="flex items-center  w-full bg-teal-lighter">
  <div class="w-full bg-white rounded shadow-lg p-8 m-4">
    <h1 class="block w-full text-center text-grey-darkest mb-6">Sign Up</h1>
 <FormKit
    type="form"
    id="registration-example"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Register"
    :submit-attrs="{
      inputClass: 'bg-pink-400 hover:bg-pink-700 text-white text-sm font-normal py-3 px-5',
      wrapperClass: 'im-on-the-wrapper',
      outerClass: 'border-black border-6 rounded-xl '
    }"
    @submit="submitHandler"
    :actions="false"
    #default="{ value }"
  >

    <p>
      You can put any type of element inside a form, not just FormKit inputs
      (although only FormKit inputs are included with the submission).
    </p><br>
    <hr />
    <br>
    <FormKit
      type="text"
      name="fname"
      label="Your name"
      placeholder="Jane Doe"
      help="What do people call you?"
      validation="required"
    />
    <FormKit
      type="text"
      name="uname"
      label="Your user name"
      placeholder="Jane.Doe.3"
      help="What do people call you Online?"
      validation="required"
    />
    <FormKit
      type="text"
      name="email"
      label="Your email"
      placeholder="jane@example.com"
      help="What email should we use?"
      validation="required|email"
    />
    <div class="double">
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required|length:6|matches:/[^a-zA-Z]/"
        :validation-messages="{
          matches: 'Please include at least one symbol',
        }"
        placeholder="Your password"
        help="Choose a password"
      />
      <FormKit
        type="password"
        name="password_confirm"
        label="Confirm password"
        placeholder="Confirm password"
        validation="required|confirm"
        help="Confirm your password"
      />
    </div>

    <FormKit
      type="submit"
      label="Register"
    />
    <pre style="display: none;" wrap>{{ value }}</pre>
  </FormKit>
  <div v-if="submitted">
    <h2>Submission successful!</h2>
  </div>

</div>
</div>
</div>
</template>