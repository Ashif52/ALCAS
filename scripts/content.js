const contentSets = [
    {
      div1: [
             "3 Posters Per Week ", 
             "Social Media Accounts Creation ", 
             "Strategy ",
             "Business Developing Content",
             "Reels or Shorts (1 per week) ",
             "3 Ads Campaign "
            ],
      div2: [
             "Reels or Shorts (1 Per week) ", 
             "Content Creation/Strategy ", 
             "Business Branding Support ",
             "Meta Business Suite Handling ",
             "Social Media Pages Handling ",
             "4 Ads Campaign "
            ],
      div3: [
             "25 Posters Per Month ", 
             "BReels & Shorts (2 Per week) ", 
             "RUnique Content Strategy ",
             "Business Development Support ",
             "Meta Business Suite Handling ",
             "Social Media Pages Handling ",
             "Google Analytics Set-up ",
             "Dedicated Technical Support ",
             "8 Ads Campaign "
            ]
    },
    {
      div1: [
             "Up to 6 polished pages", 
             "Clean design, mobile-first ", 
             "Contact & inquiry forms ",
             "SEO starter pack ",
             "2 Revisions ",
             "Google Analytics setup ",
             "Delivery: 7-10 days ",
             "Add-on page: ₹2,800/page "
            ],
      div2: [
             "Up to 10 pages ", 
             "Custom layout with brand identity ", 
             "Blog + testimonial section ",
             "Contact, forms, sliders, galleries ",
             "Full SEO (on-page + indexing) ",
             "WhatsApp chat integration ",
             "3 Revisions ",
             "Delivery: 12-15 days ",
             "Add-on page: ₹2,500/page "
            ],
      div3: [
             "15+ pages, premium build ", 
             "Full UI/UX design system ", 
             "CMS integration (WordPress/Webflow) ",
             "Speed + security optimized ",
             "Advanced analytics, chatbot ",
             "Domain + hosting setup guidance ",
             "8 Revisions ",
             "Free maintenance: 30 days ",
             "Delivery: 15-20 days ",
             "Add-on page: ₹2,000/page "
            ]
    }
  ];


let currentSet =0;

document.getElementById("switch-bgimg").addEventListener("click", () => {
    if(currentSet == 0){
        currentSet = 1;
    }
    else{
        currentSet = 0;
    }
    const set = contentSets[currentSet];



    document.getElementById("list-div-1").innerHTML = set.div1.map(item => 
        `
            <div class="pricing-card-list-item">
                <img src="../resources/elements/pricing-card-list-checked-icon-light.svg"
                    loading="lazy" alt="Checked icon"
                    class="icon-18px">
            <div>
                ${item}
            </div>
            </div>
        `).join("")

    document.getElementById("list-div-2").innerHTML = set.div2.map(item => 
        `
            <div class="pricing-card-list-item">
                <img src="../resources/elements/pricing-card-list-checked-icon-light.svg"
                    loading="lazy" alt="Checked icon"
                    class="icon-18px">
            <div>
                ${item}
            </div>
            </div>
        `).join("")
    document.getElementById("list-div-3").innerHTML = set.div3.map(item => 
        `
            <div class="pricing-card-list-item">
                <img src="../resources/elements/pricing-card-list-checked-icon-light.svg"
                    loading="lazy" alt="Checked icon"
                    class="icon-18px">
            <div>
                ${item}
            </div>
            </div>
        `).join("")
})

