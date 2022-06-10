import React from "react";

export default function Header() {
    return (
        <div className="text-center bg-gray-50 text-gray-800 py-20 px-6">
            <h1 className="text-5xl font-bold mt-0 mb-6">
                What should I eat tonight?
            </h1>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Gimme something to eat
            </button>
        </div>
    );
}
