export default function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>Email: info@mbuanene.org</p>
      <p>Phone: +254 123 456789</p>
      <form style={{maxWidth: '400px', margin: '2rem auto'}}>
        <label>Name:<br/>
          <input type="text" name="name" required style={{width: '100%', marginBottom: '1rem'}}/>
        </label>
        <label>Email:<br/>
          <input type="email" name="email" required style={{width: '100%', marginBottom: '1rem'}}/>
        </label>
        <label>Message:<br/>
          <textarea name="message" required rows={4} style={{width: '100%', marginBottom: '1rem'}}></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}