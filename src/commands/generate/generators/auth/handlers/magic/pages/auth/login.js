module.exports = function () {
  return `<enhance-page-container>
  <main>
    <h1 class="mb1 font-semibold text3">Login page</h1>
    <enhance-form action="/auth/login" method="post">
  <p>Login with your Email</p>
    <enhance-text-input label="Email" id="email" name="email"  type="email"></enhance-text-input>
</enhance-form>
</main>
</enhance-page-container>
`
}
