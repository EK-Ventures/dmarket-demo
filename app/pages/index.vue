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
useHead({
  title: "d'Market — Buy local. Sell big.",
  meta: [
    {
      name: 'description',
      content: "d'Market is a mobile marketplace for Africa's informal economy, helping traders, micro-businesses and local buyers connect in real time.",
    },
  ],
})
</script>
