"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from './_utils/auth-context'; // Import the authentication context

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  // If the user is not logged in, prompt them to log in with GitHub
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Shopping List App</h2>
          <button
            onClick={gitHubSignIn}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Shopping List App</h2>
        <p className="mb-4 text-gray-900">Signed in  {user.displayName}</p>

        {/* Sign Out Button */}
        <button
          onClick={firebaseSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mb-4"
        >
          Sign out
        </button>

        {/* Continue to Shopping List Button */}
        <button
          onClick={() => router.push('/week-10/shopping-list')}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Continue to your Shopping List
        </button>
      </div>
    </main>
  );
};

export default Page;
