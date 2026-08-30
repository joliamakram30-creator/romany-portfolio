const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// EJS SETUP
// ==========================================

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// ==========================================
// STATIC FILES
// ==========================================

app.use(express.static(path.join(__dirname, 'public')));


// ==========================================
// HOME PAGE
// ==========================================

app.get('/', (req, res) => {

    const portfolioData = {

        // ======================================
        // PERSONAL INFORMATION
        // ======================================

        name: "Romany Noshi",

        title: "Social Media Specialist",

        bio: "Social Media Specialist متخصص في بناء وتطوير حضور البراندات على السوشيال ميديا من خلال Content Strategy، Creative Ideas، Audience Engagement، وتحليل الأداء لتحقيق نمو حقيقي.",

        // استبدلي الإيميل هنا بالإيميل الجديد
        email: "romanynosehy@gmail.com",

        phone: "+20 12 29052714",

        // الرقم بدون + ومسافات لاستخدامه مع WhatsApp
        whatsapp: "201229052714",

        location: "Cairo, Egypt",

        diploma: "Integrated Marketing Skillset Diploma",

        diplomaDetails: "Workshop with Instructor Talaat Amin",


        // ======================================
        // HERO STATISTICS
        // ======================================

        stats: [

            {
                number: "6.1x",
                label: "Highest ROAS"
            },

            {
                number: "+5,100",
                label: "Sales Generated"
            },

            {
                number: "+4.5M",
                label: "Reach"
            },

            {
                number: "6+",
                label: "Major Brands"
            }

        ],


        // ======================================
// BRANDS
// ======================================

brands: [

    {
        name: "Breadfast",
        logo: "/images/photo_5809907814875468075_y.jpg"
    },

    {
        name: "Squatwolf",
        logo: "/images/photo_5809907814875468133_y.jpg"
    },

    {
        name: "Oraimo",
        logo: "/images/photo_5809907814875468130_y.jpg"
    },

    {
        name: "Qasr Elkbabgi",
        logo: "/images/photo_5809907814875468131_x.jpg"
    },

    {
        name: "Maestro",
        logo: "/images/photo_5809907814875468132_y.jpg"
    },

    {
        name: "Mavin",
        logo: "/images/photo_5809907814875468129_x.jpg"
    },

    {
        name: "blaban",
        logo: "/images/photo_5809907814875468128_y.jpg"
    }

],


        // ======================================
        // SERVICES
        // ======================================

        services: [

            {
                icon: "📱",

                title: "Social Media Management",

                description:
                    "إدارة وتطوير حضور البراند على منصات السوشيال ميديا وبناء استراتيجية واضحة للمحتوى."
            },

            {
                icon: "✍️",

                title: "Content Strategy",

                description:
                    "تخطيط Content Strategy وأفكار المحتوى بما يتناسب مع هوية البراند والجمهور المستهدف."
            },

            {
                icon: "🎨",

                title: "Creative Content",

                description:
                    "تطوير أفكار Creative للـ Posts والـ Reels والـ Campaigns تساعد البراند على الظهور بشكل أقوى."
            },

            {
                icon: "📊",

                title: "Social Media Analytics",

                description:
                    "تحليل أداء المحتوى والحملات واكتشاف فرص التحسين لاتخاذ قرارات مبنية على البيانات."
            }

        ],

// ======================================
// PORTFOLIO PROJECTS
// ======================================

projects: [

    {
        id: 1,

        title: "Oraimo Electronics Launch",

        category: "Electronics / Social Media Campaign",

        description:
            "تطوير أفكار واستراتيجية Social Media Campaign لإطلاق منتجات إلكترونية مع التركيز على الـ Awareness والـ Engagement والـ Conversions.",

        logo:
            "/images/photo_5809907814875468130_y.jpg",

        canvaLink:
            "https://canva.link/cwrmwnoa53dwpd9"
    },


    {
        id: 2,

        title: "Blaban Social Media Campaign",

        category: "Q-Commerce / Social Media",

        description:
            "تطوير أفكار محتوى وحملات Social Media تستهدف زيادة الـ Engagement والوصول لجمهور جديد ودعم نمو البراند.",

        // صورة بلبن
        logo:
            "/images/photo_5809907814875468128_y.jpg",

        canvaLink:
            "https://canva.link/cfqalnf0y7cdnho"
    },


    {
        id: 3,

        title: "Maestro Social Media Campaign",

        category: "Maestro / Social Media Campaign",

        description:
            "بناء Creative Campaign Angles مختلفة لزيادة الـ Reach والـ Engagement وتعزيز حضور البراند على السوشيال ميديا.",

        // صورة ماسترد
        logo:
            "/images/photo_5809907814875468132_y.jpg",

        canvaLink:
            "https://canva.link/qmk3pqw62vgm8az"
    },


    {
        id: 4,

        title: "Squatwolf Social Media Campaign",

        category: "E-Commerce / Fashion",

        description:
            "تطوير أفكار Social Media وCreative Content لبراند Fashion مع التركيز على الـ Brand Awareness والـ Engagement.",

        logo:
            "/images/photo_5809907814875468133_y.jpg",

        canvaLink:
            "#"
    }

],
        


        // ======================================
        // CASE STUDIES
        // ======================================

        caseStudies: [

            {
                client: "Oraimo",

                platform: "Social Media & Paid Ads",

                roas: "5.4x",

                conversions: "+3,200 Orders",

                result:
                    "Strong product launch performance"
            },


            {
                client: "Qasr Elkbabgi",

                platform: "Social Media & Instagram",

                roas: "4.8x",

                conversions: "+4.5M Reach",

                result:
                    "High awareness & engagement"
            },


            {
                client: "Maestro & Mavin",

                platform: "Social Media & Performance",

                roas: "6.1x",

                conversions: "+5,100 Sales",

                result:
                    "High-volume profitable growth"
            }

        ],


        // ======================================
        // SKILLS
        // ======================================

        skills: [

            "Social Media Management",

            "Content Strategy",

            "Content Planning",

            "Creative Strategy",

            "Social Media Campaigns",

            "Instagram",

            "Facebook",

            "TikTok",

            "Audience Research",

            "Community Management",

            "Social Media Analytics",

            "Performance Marketing"

        ]

    };


    // ==========================================
    // RENDER PAGE
    // ==========================================

    res.render('index', {
        data: portfolioData
    });

});


// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {

    console.log(
        `Server running on: http://localhost:${PORT}`
    );

});