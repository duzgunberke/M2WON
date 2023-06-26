import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
      <div class="w-full">
        <details
          class="border border-secondary rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-4 bg-none open:bg-dimBlue duration-500"
        >
          <summary
            class="list-none font-semibold relative cursor-pointer pr-7 text-white"
            >What do you actually sell here?
            <div
              class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <svg
                class="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p class=" pt-3 text-white">
          Metin2 Official and Private servers yang & items and Closed Server accounts, they are literally high quality products. You can pick between different servers and specify amount, which will provide you to have much more fun in game.
          </p>
        </details>
        <details
          class="border border-secondary rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-4 bg-none open:bg-dimBlue duration-500"
        >
          <summary
            class="list-none font-semibold relative  cursor-pointer pr-7 text-white"
            >Is it safe to buy yangs?
            <div
              class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <svg
                class="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p class=" pt-3 text-white">
          Yes, as safe as it gets when it comes to buying Metin2 Yangs. We don't believe customers should be risking their money when purchasing online so we offer safe delivery method as an option for every server. Never worry again.
          </p>
        </details>
        <details
          class="border border-secondary rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-4 bg-none open:bg-dimBlue duration-500"
        >
          <summary
            class="list-none font-semibold relative cursor-pointer pr-7 text-white"
            >How it works?
            <div
              class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <svg
                class="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p class=" pt-3 text-white">
          Select the server on product list card and click to Purchase..

Write your email adress at the checkout, After you purchase the product you will get an email whic tells you your order number. Then you will connect live chat and write your product`s order number > Live Chat is located in right bottom side.
Write your nickname in game and location.
<b>Then one of our agent will help you to receive Yangs in a few minutes.</b>
          </p>
        </details>
        <details
          class="border border-secondary rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-4 bg-none open:bg-dimBlue duration-500"
        >
          <summary
            class="list-none font-semibold relative  cursor-pointer pr-7 text-white"
            >I bought the closed server account, where is the account information?
            <div
              class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <svg
                class="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p class=" pt-3 text-white">
          Your Closed Server ID Account will be delivered instantly 24/7 through e-mail after the payment has reached us. Sometimes our emails go to spam folder, check this too! If you want you can connect to our Live Chat and receive accounts from there in case any problem happens.
          </p>
        </details>
        <details
          class="border border-secondary rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-4 bg-none open:bg-dimBlue duration-500"
        >
          <summary
            class="list-none font-semibold relative cursor-pointer pr-7 text-white"
            >How can I get in touch with you?
            <div
              class="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <svg
                class="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p class=" pt-3 text-white">
          We provide excellent support for our Metin2 yangs and closed server accounts! Solve any of your questions through e-mail: info@TurboYang.com or via Live Chat in the lower right corner.
          </p>
        </details>
      </div>
  </section>
);

export default CardDeal;
