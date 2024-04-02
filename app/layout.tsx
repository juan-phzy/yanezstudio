import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Yanez Studio",
	description:
		"Drone, Video, & Photography Services for New Jesey and New York",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} root-layout`}>
				<Navbar />
				<main className="root-children">{children}</main>
			</body>
		</html>
	);
}
