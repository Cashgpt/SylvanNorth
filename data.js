/**
 * Sylvan North Website Data Configuration
 * 
 * This file contains all the content that can be easily updated.
 * Edit the values below to update your website without touching the HTML.
 */

// Funding Progress Configuration
const fundingData = {
    currentFunding: 85000,  // Current amount raised in dollars
    fundingGoal: 250000,    // Total funding goal in dollars
    supporterCount: 127,    // Number of supporters/backers
    daysLeft: 75           // Number of days left in the campaign
};

// Services Data
const servicesData = [
    {
        title: "Selective Timber Harvesting",
        description: "We practice responsible forestry by selectively harvesting mature trees to maintain forest health while generating immediate revenue.",
        image: "images/service-timber.jpg",
        link: "#"
    },
    {
        title: "Tree Nursery Operations",
        description: "Our nursery grows native and climate-resilient tree species for reforestation, landscaping, and conservation projects throughout Ontario.",
        image: "images/service-nursery.jpg",
        link: "#"
    },
    {
        title: "Agroforestry Systems",
        description: "By integrating tree crops, understory plants, and potentially livestock, we create diverse, productive landscapes that maximize ecological and economic benefits.",
        image: "images/service-agroforestry.jpg",
        link: "#"
    },
    {
        title: "Carbon Credit Generation",
        description: "Our reforestation efforts sequester carbon, allowing us to generate verified carbon credits that provide long-term passive income.",
        image: "images/service-carbon.jpg",
        link: "#"
    }
];

// Impact Metrics
const impactData = [
    {
        icon: "fas fa-tree",
        number: "50,000+",
        label: "Trees Planted"
    },
    {
        icon: "fas fa-globe-americas",
        number: "500+",
        label: "Tons of CO₂ Sequestered"
    },
    {
        icon: "fas fa-building",
        number: "10+",
        label: "Local Jobs Created"
    },
    {
        icon: "fas fa-leaf",
        number: "25+",
        label: "Species Protected"
    }
];

// Projects Data
const projectsData = [
    {
        title: "Northern Ontario Reforestation",
        description: "Restoring 100+ acres of previously logged land to diverse, productive forest.",
        image: "images/project-reforestation.jpg"
    },
    {
        title: "Carbon Offset Partnership",
        description: "Collaborating with businesses to offset their carbon emissions through our reforestation efforts.",
        image: "images/project-carbon.jpg"
    },
    {
        title: "Wildlife Conservation",
        description: "Creating habitat for native species through strategic planting and land management.",
        image: "images/project-wildlife.jpg"
    }
];

// Funding Tiers
const fundingTiersData = [
    {
        title: "Seed Supporter",
        price: "$50",
        isPopular: false,
        features: [
            "Sponsor a Tree Certificate",
            "Regular Project Updates",
            "Name on Supporters Wall"
        ],
        link: "#"
    },
    {
        title: "Forest Guardian",
        price: "$500",
        isPopular: true,
        features: [
            "Sponsor a Grove Certificate",
            "Lifetime Carbon Offset",
            "VIP Project Updates",
            "Annual Site Visit"
        ],
        link: "#"
    },
    {
        title: "Equity Partner",
        price: "$5,000",
        isPopular: false,
        features: [
            "Equity Stake in Project",
            "Profit Sharing Rights",
            "Priority Carbon Credits",
            "Quarterly Business Reports",
            "Advisory Board Invitation"
        ],
        link: "#"
    }
];

// Testimonials Data
const testimonialsData = [
    {
        text: "Supporting Sylvan North has been incredibly rewarding. Their transparent approach and regular updates make me feel connected to the reforestation process. It's amazing to see the direct impact of my contribution!",
        name: "Sarah Johnson",
        title: "Forest Guardian Supporter",
        image: "images/testimonial-1.jpg"
    },
    {
        text: "As a business owner concerned about our environmental footprint, partnering with Sylvan North for carbon offsets was the perfect solution. Their approach is scientifically sound, and they've helped us achieve our sustainability goals.",
        name: "Michael Chen",
        title: "Corporate Partner",
        image: "images/testimonial-2.jpg"
    }
];

// Payment Integration Configuration
const paymentConfig = {
    paypalClientId: "your-paypal-client-id",  // Replace with your PayPal client ID
    stripePublicKey: "your-stripe-public-key", // Replace with your Stripe public key
    donationPageUrl: "https://example.com/donate" // Replace with your external donation page URL if using a third-party platform
};

// Don't edit below this line unless you know what you're doing
// Export the data for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fundingData,
        servicesData,
        impactData,
        projectsData,
        fundingTiersData,
        testimonialsData,
        paymentConfig
    };
}
