import PricingCard from "./ui/PricingCard";
import GridContainer from "./ui/GridContainer";

export function Home() {
    const featuresBasic = ["1 Static Websites", "SSL Certificate", "Custom Domain", "Unmetered Traffic"];
    const featuresMedium = ["2 Static Websites", "SSL Certificate", "Custom Domain", "Unmetered Traffic"];
    const featuresPro = ["4 Static Websites", "SSL Certificate", "Custom Domain", "Unmetered Traffic"];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl md:text-5xl font-bold mb-6">Cloud computing, simplified</h1>
                        <p className="text-xl mb-8 text-gray-600">Deploy, manage, and scale your applications with ease using our intuitive cloud platform.</p>
                        <a href="/login" className="bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors inline-block">
                            Get Started
                        </a>
                    </div>
                </div>
            </section>
            {/* Plans Section */}
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <GridContainer cols={3}>
                        <PricingCard title="Basic" price="6$" period="month" buttonText="Deploy Now" features={featuresBasic} navigateTo={'about'}></PricingCard>
                        <PricingCard title="Medium" price="10$" period="month" buttonText="Deploy Now" features={featuresMedium} navigateTo={'about'}></PricingCard>
                        <PricingCard title="Professional" price="15$" period="month" buttonText="Deploy Now" features={featuresPro} navigateTo={'about'}></PricingCard>
                    </GridContainer>
                </div>
            </section>
            {/* CTA Section */}
            <section className="bg-black text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl md:text-5xl font-bold mb-6">Try it now!</h1>
                        <p className="text-xl mb-8 text-gray-300">Create your account and have your website running in minutes.</p>
                        <a href="#" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors inline-block">
                            Sign Up
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
