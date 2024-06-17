<template>
  <div class="card bg-white p-6 grow w-[663px]">
    <div
      class="w-[95%] bg-secondary-color min-h-[120px] mx-auto text-white font-bold text-[21px] p-[20px] relative bottom-[60px]"
    >
      FAQs – Filterable Accordion
    </div>
    <div
      class="flex gap-4 text-[15px] text-secondary-color font-[400] mb-[32px]"
    >
      <p
        @click="
          ($e) => {
            tabActive = $e.target.innerHTML;
            faq = faqAll;
          }
        "
        :class="
          tabActive.trim() === 'All' &&
          'after:bg-primary-color text-primary-color'
        "
        class="hover:after:bg-primary-color hover:text-primary-color cursor-pointer min-w-[55px] text-center after:w-full after:absolute relative after:-bottom-[15px] after:left-0 after:h-[1px] after:bg-secondary-color"
      >
        All
      </p>
      <p
        :class="
          tabActive.trim() === 'Agents FAQs' &&
          'after:bg-primary-color text-primary-color'
        "
        @click="
          ($e) => {
            tabActive = $e.target.innerHTML;
            faq = faqAll.filter((f) => {
              return f.type === 'agent';
            });
          }
        "
        class="hover:after:bg-primary-color hover:text-primary-color cursor-pointer min-w-[55px] text-center after:w-full after:absolute relative after:-bottom-[15px] after:left-0 after:h-[1px] after:bg-secondary-color"
      >
        Agents FAQs
      </p>
      <p
        :class="
          tabActive.trim() === 'Choosing a Property' &&
          'after:bg-primary-color text-primary-color'
        "
        @click="
          ($e) => {
            tabActive = $e.target.innerHTML;
            faq = faqAll.filter((f) => {
              return f.type === 'property';
            });
          }
        "
        class="hover:after:bg-primary-color hover:text-primary-color cursor-pointer min-w-[55px] text-center after:w-full after:absolute relative after:-bottom-[15px] after:left-0 after:h-[1px] after:bg-secondary-color"
      >
        Choosing a Property
      </p>
    </div>
    <Accordion
      expandIcon="pi pi-plus"
      collapseIcon="pi pi-minus"
      class="text-[15px]"
      v-model:activeIndex="active"
      contentClass="accordion-style"
    >
      <AccordionTab v-for="(f, index) in faq" :key="f.id" class="bg-[#e8f6f5]">
        <template #header>
          <span class="font-[500] white-space-nowrap leading-[2.5]">
            <v-icon
              name="fa-minus"
              v-if="active == index"
              class="text-text-secondary"
            />
            <v-icon name="fa-plus" v-else class="text-text-secondary" />
            {{ f.q }}</span
          >
        </template>
        <p class="m-0 text-text-secondary">
          {{ f.ans }}
        </p>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup>
const faqAll = ref();
const faq = ref();
const active = ref();
const tabActive = ref("All");
onMounted(() => {
  faq.value = faqAll.value = [
    {
      id: 1,
      type: "agent",
      q: "What is the difference between a real estate agent and a real estate broker?",
      ans: "Most states require real estate sales professionals to be licensed by the state, so that they can control education and experience requirements and have a central authority to resolve consumer problems. The terminology used to identify real estate professionals varies a little from state to state. Brokers are generally required to have more education and experience than real estate salespersons or agents. The person you normally deal with is a real estate agent or salesperson. The salesperson is licensed by the state, but must work for a broker. All listings are placed in the broker’s name, not the salesperson’s. A broker can deal directly with home buyers and sellers, or can have a staff of salespersons or agents working for him or her.",
    },
    {
      id: 2,
      type: "agent",
      q: "Why should I use a real estate salesperson?",
      ans: "A real estate salesperson is more than just a “sales person.” They act on your behalf as your agent, providing you with advice and guidance and doing a job – helping you buy or sell a home. While it is true they get paid for what they do, so do other professions that provide advice, guidance, and have a service to sell –such as Certified Public Accountants and Attorneys The Internet has opened up a world of information that wasn’t previously available to homebuyers and seller. The data on listings available for sale is almost current – but not quite. There are times when you need the most current information about what has sold or is for sale, and the only way to get that is with an agent. If you’re selling a home, you gain access to the most buyers by being listed in the Multiple Listing Service. Only a licensed real estate agent who is a member of your local MLS can get you listed there – which then gets you automatically listed on some of the major real estate web sites. If you’re buying or selling a home, the MLS is your agent’s best tool. However, the role of an agent has changed in the last couple of years. In the past, agents were the only way home buyers and sellers could access information. Now agents are evolving. Because today’s home buyers and sellers are so much better informed than in the past, expertise and ability are becoming more important. The real estate agent is becoming more of a “guide” than a “salesperson” — your personal representative in buying or selling a home.",
    },
    {
      id: 3,
      type: "agent",
      q: "I have a family friend who is a Realtor. I like her and she is a help but she gives me one price to sell my home for and I think it is too low. So I called another agent who suggested a price more in line with my expectations. Who do I choose?",
      ans: "You might want to consult a couple more Realtors on the market value of your home. Most of the estimates should be in the same ballpark. It could be that your friend is being more honest with you about the value of your home and the other Realtor gave you a higher number because he already knew you expected it. This is called “Buying a Listing” and is the subject of an article on our web site. Or it could simply be that your friend is a good friend, but not that great of a real estate agent. Mixing business and friendships is always risky to the friendship. On the other hand, if your friend is truly competent and was providing wise advice, she may be offended if you ignore the advice and choose another agent.",
    },
    {
      id: 4,
      type: "property",
      q: "I have to make a choice between an updated home in an older neighborhood or a newer home in a more modern neighborhood. The home in the older neighborhood has almost everything I want and is much larger, but which makes the most sense as an investment?",
      ans: "If your goal is to buy a home for it’s resale value and the one you are thinking of buying in the older neighborhood is at the upper end of values for that neighborhood, then it may not be the wisest choice. If it is similar or lower in price to the others, then there should be no problem, because pricing should be considered in relation to the local neighborhood and not compared to homes in other neighborhoods (for the most part) Plus, is it a neighborhood on the decline, or are others going to be fixing things up, too, so that it is a neighborhood that is improving? It could turn out to be a very good deal as long as you don’t “overpay” because of the recent improvements. Remember that you also buy a home for it’s value to you as a “home,” and that is something else you should consider. Which neighborhood would you AND your family feel most comfortable in?",
    },
    {
      id: 5,
      type: "property",
      q: "When buying a new home, what upgrades should we go for? What holds the most value? Do we upgrade the lot? Pick more square footage in the house? Add an extra bedroom?, etc.",
      ans: "A lot depends on why you are buying the house. Are you buying it mostly as a home or mostly as an investment? There is a difference. For the most part, upgrades are high-profit items for builders. They aren’t designed to enhance the value of the house, but make you happier with the house you do buy. If you are looking at your home as an investment, then you buy from the smaller to medium size in the tract and spend only a minimal amount on upgrades. If you are looking at your purchase as a home, then you select upgrades that will enhance your quality of living. One rule of thumb is to always upgrade the carpet and padding.",
    },
  ];
});
</script>
<style lang="scss">
.faq {
  [data-pc-section="root"] {
    margin-bottom: 15px;
    margin-top: 15px;
  }
  [data-pc-section="root"] * {
    background-color: #e8f6f5;
  }
  [data-pc-section="root"] [data-p-active="true"] a,
  [data-pc-section="root"] [data-p-active="true"] span,
  [data-pc-section="root"] [data-p-active="true"] svg {
    background-color: #d2edeb;
  }
  [data-pc-section="content"] {
    padding-top: 20px;
    line-height: 2.5;
  }
}
</style>
