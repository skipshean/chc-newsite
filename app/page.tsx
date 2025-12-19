'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [linesActive, setLinesActive] = useState(false)

  useEffect(() => {
    // Trigger line animation after component mounts
    // Use requestAnimationFrame to ensure DOM is ready, then delay to see animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          setLinesActive(true)
        }, 100)
      })
    })
  }, [])

  return (
    <div className="index_headerContainer__sYJim">
      <div className="index_header__eLLn0">
        <div className="index_headingContainer__PRRGj">
          <div className="index_lines__B1s1U">
            <div 
              className={`index_line__oI6av ${linesActive ? 'index_isActive__r_HdT' : ''}`} 
              style={{ '--index': '0' } as React.CSSProperties & { '--index': string }}
            ></div>
            <div 
              className={`index_line__oI6av ${linesActive ? 'index_isActive__r_HdT' : ''}`} 
              style={{ '--index': '1' } as React.CSSProperties & { '--index': string }}
            ></div>
            <div 
              className={`index_line__oI6av ${linesActive ? 'index_isActive__r_HdT' : ''}`} 
              style={{ '--index': '2' } as React.CSSProperties & { '--index': string }}
            ></div>
          </div>
          <div className="index_heading__3crxs">
            <h1 className="hd-1">Partners for Healthcare</h1>
            <div className="index_text__mMRT2">
              <p className="pm-m">
                We believe in a better future for people and the planet.
              </p>
              <p className="pm-m">
                We're investing in a better future for people and the planet.
              </p>
              <p className="pm-m">
                At Sofinnova Partners, we focus on breakthrough innovations that have the potential to solve the world's most pressing problems. Experience, agility, and diverse points of view fuel our ability to thrive in a complex environment.
              </p>
              <p className="pm-m">
                Founded in 1972, Sofinnova Partners has backed more than 500 companies over 50 years, creating market leaders around the globe. Today, Sofinnova Partners has over €4 billion under management.
              </p>
              <p className="pm-m">
                "Partners for Life" is a cornerstone of our identity: we build lasting relationships with trust and transparency. We invest in entrepreneurs who strive to transform biopharma, medtech, digital medicine, agriculture and industrial processes with cutting-edge science that will contribute to people's health and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="index_numberLabel__cJRAO">
        <div className="index_numberLabelItem__DGbgf">
          <div className="index_number__vuYtx isActive">
            <span className="hd-2">1972</span>
          </div>
          <p className="pm-s">Established</p>
        </div>
        <div className="index_numberLabelItem__DGbgf">
          <div className="index_number__vuYtx isActive">
            <span className="hd-2">50</span>
          </div>
          <p className="pm-s">Years of Experience</p>
        </div>
        <div className="index_numberLabelItem__DGbgf">
          <div className="index_number__vuYtx isActive">
            <span className="hd-2">500+</span>
          </div>
          <p className="pm-s">Companies Backed</p>
        </div>
        <div className="index_numberLabelItem__DGbgf">
          <div className="index_number__vuYtx isActive">
            <span className="hd-2">4+ Bn</span>
          </div>
          <p className="pm-s">Euros in Assets Under Management</p>
        </div>
        <div className="index_numberLabelItem__DGbgf">
          <div className="index_number__vuYtx isActive">
            <span className="hd-2">7</span>
          </div>
          <p className="pm-s">Investment Strategies</p>
        </div>
      </section>

      <section className="fundSlides_fundSlides__RX3hL">
        <h2 className="hd-2">Our Funds</h2>
        <div className="fundSlides_fund__B2tnp">
          <h3 className="fundSlides_title__AYYrI">
            <span>Sofinnova</span>
            <span>Capital</span>
          </h3>
          <p className="fundSlides_text__SS9Ob fundSlides_black__AiQ59">
            The Sofinnova Capital Strategy is our flagship fund, investing as founding or lead investor in early-stage biopharma and medtech start-ups developing groundbreaking therapeutic technologies.
          </p>
        </div>
      </section>

      <section className="articleSuggestions_articleSuggestions__yGbe9">
        <h2 className="hd-2">Latest News</h2>
        <div className="articleSuggestions_list__tjbz_">
          <article className="articleSuggestions_item__FNI6u">
            <a href="/news">
              <div className="articleSuggestions_surtitle__3_5f9">
                <span className="pm-xs">16 December, 2025</span>
              </div>
              <h3 className="articleSuggestions_headline__KKtD_ hm-3">
                May Health Announces CE Mark for Innovative Treatment for Women with PCOS-related Infertility
              </h3>
            </a>
          </article>
        </div>
      </section>
    </div>
  )
}
