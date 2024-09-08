import React from "react";

export function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About CloudHostPro</h1>
                        <p className="text-xl mb-8 text-gray-600">Empowering developers and businesses with cutting-edge cloud solutions since 2010.</p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <p className="text-lg mb-6">CloudHostPro was founded in 2010 with a simple mission: to make cloud computing accessible to everyone. What started as a small team of passionate developers has grown into a global company serving thousands of businesses and developers worldwide.</p>
                        <p className="text-lg mb-6">Our journey has been driven by innovation, customer-centricity, and a relentless pursuit of simplifying complex technologies. Today, we're proud to be at the forefront of cloud hosting solutions, continually pushing the boundaries of what's possible in the cloud.</p>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", icon: "💡", description: "We constantly innovate to provide cutting-edge solutions" },
                            { title: "Simplicity", icon: "🎯", description: "We believe in making complex technologies simple and accessible" },
                            { title: "Reliability", icon: "🛡️", description: "We're committed to providing reliable and secure services" },
                        ].map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Mathias Kaempffer", role: "CEO & founder", image: "/placeholder.svg?height=300&width=300" },
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg" />
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="bg-black text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join us in shaping the future of cloud computing</h2>
                    <p className="text-xl mb-8">Experience the HostBrand difference today.</p>
                    <a href="#" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors inline-block">
                        Get Started
                    </a>
                </div>
            </section>
        </>
    )
}