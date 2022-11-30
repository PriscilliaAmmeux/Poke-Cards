import Style from "./style";

export default function ContactForm() {
  return (
    <Style>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="message">
        Your request:
        <textarea name="message" id="message" cols="30" rows="10" />
      </label>
      <input className="submit" type="submit" value="Submit" />
    </Style>
  );
}
