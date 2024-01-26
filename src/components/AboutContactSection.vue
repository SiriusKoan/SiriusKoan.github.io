<template>
  <div class="my-5">
    <h2>Contact Me</h2>
    <LinkContainer
      href="https://github.com/SiriusKoan"
      imgSrc="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
      imgAlt="github"
      description="GitHub"
    />
    <LinkContainer
      href="https://telegram.me/SiriusKoan"
      imgSrc="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-512.png"
      imgAlt="telegram"
      description="Telegram"
    />
    <LinkContainer
      href="mailto:blog@siriuskoan.one"
      imgSrc="https://cdn4.iconfinder.com/data/icons/logo-brand/512/gmail_google_mail_email-256.png"
      imgAlt="email"
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
