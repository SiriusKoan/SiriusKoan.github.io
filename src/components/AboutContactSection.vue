<template>
  <div class="my-5">
    <h2>Contact Me</h2>
    <LinkContainer
      href="https://github.com/SiriusKoan"
      img-src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
      img-alt="github"
      description="GitHub"
    />
    <LinkContainer
      href="https://telegram.me/SiriusKoan"
      img-src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-512.png"
      img-alt="telegram"
      description="Telegram"
    />
    <LinkContainer
      href="mailto:me@siriuskoan.one"
      img-src="https://cdn4.iconfinder.com/data/icons/logo-brand/512/gmail_google_mail_email-256.png"
      img-alt="email"
      description="Email"
    />
  </div>
</template>

<script>
import LinkContainer from "./LinkContainer.vue";
export default {
  name: "AboutContactSection",
  components: {
    LinkContainer,
  },
};
</script>
