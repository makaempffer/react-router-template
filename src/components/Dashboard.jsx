import React, { useState } from "react";
import { Bell, Plus, Settings, LogOut, BarChart3, Globe, Users, Activity, Edit, Info, RefreshCw } from 'lucide-react'

export function Dashboard() {
    const [selectedWebsite, setSelectedWebsite] = useState(null);

    const handleWebsiteSelect = (website) => {
        setSelectedWebsite(website)
    }


    const websiteData = [
        { name: 'mysite.com', visitors: 1234, uptime: 99.9, status: 'active' },
        { name: 'portfolio.com', visitors: 567, uptime: 100, status: 'active' },
        { name: 'blog.com', visitors: 890, uptime: 99.5, status: 'warning' },
        { name: 'store.com', visitors: 432, uptime: 98.7, status: 'active' },
    ]
    return (
        <>
            <section className="py-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="container mx-auto px-4 justify-center">
                        <h1 className="text-4xl font-bold">Websites</h1>
                        {/* Websites Grid */}
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg my-4">
                            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Your Websites</h3>
                                <button className="flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Website
                                </button>
                            </div>
                            <ul className="divide-y divide-gray-200">
                                {websiteData.map((website) => (
                                    <li className="hover:bg-gray-100 transition duration-300" key={website.name} onClick={() => handleWebsiteSelect(website)}>
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-medium text-gray-900 truncate">{website.name}</p>
                                                <div className="ml-2 flex-shrink-0 flex">
                                                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${website.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {website.status}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-2 sm:flex sm:justify-between">
                                                <div className="sm:flex">
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        <Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                                        {website.visitors} visitors
                                                    </p>
                                                </div>
                                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                                    <Activity className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                                    Uptime: {website.uptime}%
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Second Col */}
                    <div className="container mx-auto px-4 justify-center">
                        <h1 className="text-4xl font-bold">Actions</h1>
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg my-4">
                            {selectedWebsite ? (
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                        Actions for <a className="underline text-indigo-600" href={"https://"+selectedWebsite.name}>{selectedWebsite.name}</a>
                                    </h3>
                                    <div className="space-y-4">
                                        <button className="flex items-center w-full px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <Edit className="h-5 w-5 mr-2 text-gray-400" />
                                            Update Website
                                        </button>
                                        <button className="flex items-center w-full px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <Info className="h-5 w-5 mr-2 text-gray-400" />
                                            See Details
                                        </button>
                                        <button className="flex items-center w-full px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <RefreshCw className="h-5 w-5 mr-2 text-gray-400" />
                                            Restart Website
                                        </button>
                                        <button className="flex items-center w-full px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <BarChart3 className="h-5 w-5 mr-2 text-gray-400" />
                                            View Analytics
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="px-4 py-5 sm:px-6 text-center text-gray-500">
                                    Select a website to see available actions
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}