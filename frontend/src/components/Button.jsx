import React from "react";
import dcLink from "../constants/discord.json"

const Button = ({ styles }) => (
  <a type="button" href={`https://discordapp.com/users/${dcLink.discordId}/`}className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Let's Get
  </a>
);

export default Button;
