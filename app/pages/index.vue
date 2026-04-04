<template>
  <div>
    <LandingNavBar />
    <main>
      <LandingHeroSection />
      <LandingCredibilityStrip />
      <LandingWhatIsSection />
      <LandingHowItWorksSection />
      <LandingCategoriesSection />
      <LandingTrustLayerSection />
      <LandingValidationSection />
      <LandingOpportunitySection />
      <LandingScaleSection />
      <LandingLeadershipSection />
      <LandingFinalCtaSection />
    </main>
    <LandingAppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "d'Market – Buy local. Sell big.",
  description: "d'Market is a mobile marketplace for Africa's informal economy, helping traders, micro-businesses and local buyers connect in real time.",
  ogTitle: "d'Market – Buy local. Sell big.",
  ogDescription: "d'Market is a mobile marketplace for Africa's informal economy, helping traders, micro-businesses and local buyers connect in real time.",
  ogImage: 'https://dev.getondamarket.com/app-shot.png',
  ogUrl: 'https://dev.getondamarket.com',
  ogType: 'website',
  ogSiteName: "d'Market",
  twitterCard: 'summary_large_image',
  twitterTitle: "d'Market – Buy local. Sell big.",
  twitterDescription: "d'Market is a mobile marketplace for Africa's informal economy, helping traders, micro-businesses and local buyers connect in real time.",
  twitterImage: 'https://dev.getondamarket.com/app-shot.png',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://dev.getondamarket.com/' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: "d'Market",
        url: 'https://dev.getondamarket.com',
        logo: 'https://dev.getondamarket.com/favicon.svg',
        description: "A mobile marketplace for Africa's informal economy, helping traders, micro-businesses and local buyers connect in real time.",
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'hello@getondamarket.com',
          contactType: 'customer support',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'GB',
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to trade on d\'Market',
        description: 'Get started buying and selling on d\'Market in four simple steps.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'List what you sell or offer',
            text: 'Create your trader profile and list your products or services on d\'Market.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Get discovered nearby',
            text: 'Buyers in your area can find your listings through location-based search.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Match, connect and trade',
            text: 'Connect with buyers directly and agree on trades in real time.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Build trust as you grow',
            text: 'Earn ratings and reviews that boost your visibility and reputation.',
          },
        ],
      }),
    },
  ],
})
</script>
