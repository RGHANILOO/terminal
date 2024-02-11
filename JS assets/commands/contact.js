export default function generateContactForm(output) {
  console.log(`Generating the contact form...`);

  output.innerHTML += `
    <div>
        <form action="/my-handling-form-page" method="post">
            <ul>
                <li>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user_name" placeholder="e.g. Razzle Dazzle" />
                </li>
                <li>
                    <label for="mail">Email:</label>
                    <input type="email" id="mail" name="user_email" placeholder="e.g. razzle@gmail.com"/>
                </li>
                <li>
                    <label for="msg">Message:</label>
                    <textarea id="msg" name="user_message" placeholder="e.g. Hey 👋🏽 , ..."></textarea>
                </li>
                <li class="button">
                    <button type="submit">Send 📨</button>
                </li>
            </ul>
        </form>
    </div>
    `;

  // Output a message for further questions or explanations
  console.log(`Contact form generated!`);
}
