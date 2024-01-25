<template>
    <div class="container">
        <div>
            <h2>Contact Me</h2>
            <div class="link-container">
                <a href="https://github.com/SiriusKoan" target="_blank">
                    <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="github">
                    <span class="description">GitHub</span>
                </a>
            </div>
            <div class="link-container">
                <a href="https://telegram.me/SiriusKoan" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-512.png" alt="telegram">
                    <span class="description">Telegram</span>
                </a>
            </div>
            <div class="link-container">
                <a>
                    <img src="https://cdn4.iconfinder.com/data/icons/logo-brand/512/gmail_google_mail_email-256.png" alt="email">
                    <span class="description" id="email" title="Click to copy">k.peihsun@gmail.com</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutContactSection",
};
</script>

<style scoped>
@import "../assets/about-section.css";

.link-container {
    display: flex;
    flex-direction: row;
}

.link-container .description {
	padding: 15px;
}

.link-container a {
    color: white;
    width: 50px;
    display: inline-flex;
    align-items: center;
}

#email {
    cursor: pointer;
    text-underline-offset: 3px;
}

#email:hover {
    text-decoration: underline;
}
</style>
