export default function Contact() {
  return (
    <div className="container padding">
      <header className="pageHeader_pageHeader__2gWcy pageHeader_bottomLeft__I4HlE pageHeader_black__YsD2J">
        <div className="pageHeader_wrapper__DlXI6">
          <h1 className="hm-2 hd-1">Contact us</h1>
        </div>
      </header>
      
      <div className="padding">
        <ul className="contact_addresses__Nt19T">
          <li className="contact_entry__BQgGB">
            <span className="pm-m contact_city__CiZu3">Paris</span>
            <a className="hm-5 contact_address__MEBYw" href="https://www.google.com/maps/search/7-11%20Boulevard%20Haussmann%0AParis%2C%20France%0A75009" target="_blank" rel="noopener noreferrer">
              7-11 Boulevard Haussmann
              Paris, France
              75009
            </a>
          </li>
          <li className="contact_entry__BQgGB">
            <span className="pm-m contact_city__CiZu3">Milan</span>
            <a className="hm-5 contact_address__MEBYw" href="https://www.google.com/maps/search/Via%20Borgogna%205%0AMilan%2C%20Italy%0A20122" target="_blank" rel="noopener noreferrer">
              Via Borgogna 5
              Milan, Italy
              20122
            </a>
          </li>
          <li className="contact_entry__BQgGB">
            <span className="pm-m contact_city__CiZu3">London</span>
            <a className="hm-5 contact_address__MEBYw" href="https://www.google.com/maps/search/1%20Pancras%20Square%0ALondon%2C%20UK%0AN1C%204AG" target="_blank" rel="noopener noreferrer">
              1 Pancras Square
              London, UK
              N1C 4AG
            </a>
          </li>
          <li className="contact_entry__BQgGB contact_socials__rM4os">
            <span className="pm-m contact_city__CiZu3">Social media</span>
            <a className="hm-5 a--underlined contact_social__CZbW7" href="https://twitter.com/SofinnovaVC" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className="hm-5 a--underlined contact_social__CZbW7" href="https://www.linkedin.com/company/sofinnova-partners/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
        
        <section className="contact_formSection__94Mlh">
          <div>
            <form className="form_form__jakRN">
              <h2 className="hm-4 form_title__Omi_I">Send a message</h2>
              <div className="input_wrapper__6uNcy form_input__hHbrA">
                <input className="hm-5 input_input__kIC2U" type="text" placeholder="First name" required name="firstname" />
                <span className="pm-m input_required__C19mv">Required</span>
              </div>
              <div className="input_wrapper__6uNcy form_input__hHbrA">
                <input className="hm-5 input_input__kIC2U" type="text" placeholder="Last name" required name="lastname" />
                <span className="pm-m input_required__C19mv">Required</span>
              </div>
              <div className="input_wrapper__6uNcy form_input__hHbrA">
                <input className="hm-5 input_input__kIC2U" type="email" placeholder="Your e-mail address" required name="email" />
                <span className="pm-m input_required__C19mv">Required</span>
              </div>
              <div className="textarea_wrapper__F72hb form_input__hHbrA">
                <textarea required className="hm-5 textarea_textarea__zpG49" name="message" placeholder="Your message"></textarea>
              </div>
              <div className="form_messages__FlF7w">
                <button className="button_btn__Lt_MH button_rounded__9DsZf button_black__K32K3 form_button__0zy1n" type="submit">
                  <span className="form_buttonMessage__OoTzq form_isActive__TZgWR">Send your message</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
