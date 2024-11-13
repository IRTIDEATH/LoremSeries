import {
	PlugZap2Icon,
	Plus,
	RabbitIcon,
	ShieldCheckIcon
} from "lucide-react";
import { LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function Features() {
	return (
		<div className="md:w-10/12 mt-10 mx-auto font-geist md:border-l-0 md:border-[1.2px] rounded-none">
			<div className="grid w-full grid-cols-1 grid-rows-4 md:grid-cols-3 md:mx-0 md:grid-rows-1">
				<div className="items-start justify-start border-x-[1.2px] border-t-[1.2px] md:border-t-0  transform-gpu  flex flex-col p-10">
					<div className="flex items-center gap-2 my-1">
						<PlugZap2Icon className="w-4 h-4" />
						<p className="text-gray-600 dark:text-gray-400">
							Framework Agnostic{" "}
						</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-xl font-normal tracking-tighter md:text-2xl">
									Supports popular <strong>frameworks</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Supports your favorite frontend, backend and meta frameworks,
							including React, Vue, Svelte, Astro, Solid, Next.js, Nuxt, Hono,
							and more.{" "}
							<a className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</a>
						</p>
					</div>
				</div>
				<div className="relative items-start justify-start border-l-[1.2px] border-r-[1.2px] border-t-[1.2px] md:border-r-0 md:border-t-0 flex flex-col p-10 transform-gpu">
					<Plus className="absolute bottom-[-17px] left-[-17px] text-yellow w-8 h-8" />

					<div className="flex items-center gap-2 my-1">
						<LockClosedIcon className="w-4 h-4" />
						<p className="text-gray-400">Authentication</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Email & Password <strong>Authentication</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Built-in support for email and password authentication, with
							secure password hashing and account management features.{" "}
							<a className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</a>
						</p>
					</div>
				</div>
				<div className="relative items-start justify-start border-l-[1.2px] border-r-[1.2px] border-t-[1.2px] md:border-r-0 md:border-t-0 flex flex-col p-10 transform-gpu">
					<Plus className="absolute bottom-[-17px] left-[-17px] text-yellow w-8 h-8" />

					<div className="flex items-center gap-2 my-1">
						<LockClosedIcon className="w-4 h-4" />
						<p className="text-gray-400">Authen</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Email & Password <strong>Authentication</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Built-in support for email and password authentication, with
							secure password hashing and account management features.{" "}
							<a className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</a>
						</p>
					</div>
				</div>
				<div className="items-start justify-start border-x-[1.2px] border-t-[1.2px] flex flex-col p-10">
					<div className="flex items-center gap-2 my-1">
						<ShieldCheckIcon className="w-4 h-4" />
						<p className="text-gray-400">Two Factor</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Two Factor <strong>Authentication</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							With our built-in two factor authentication plugin, you can add an
							extra layer of security to your account.{" "}
							<Link className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</Link>
						</p>
					</div>
				</div>
				<div className="items-start justify-start border-x-[1.2px] border-t-[1.2px] flex flex-col p-10">
					<div className="flex items-center gap-2 my-1">
						<RabbitIcon className="w-4 h-4" />
						<p className="text-gray-400">
							Organization & Access Control{" "}
						</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Gain and manage <strong>access.</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Manage users and their access to resources within your
							application.{" "}
							<a className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</a>
						</p>
					</div>
				</div>
				<div className="items-start justify-start border-l-[1.2px] border-r-[1.2px] border-t-[1.2px] md:border-r-0 flex flex-col p-10 border-b-[1.2px] md:border-b-0">
					<div className="flex items-center gap-2 my-1">
						<RabbitIcon className="w-4 h-4" />
						<p className="text-gray-400">
							Organization & Access Control{" "}
						</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Gain and manage <strong>access.</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Manage users and their access to resources within your
							application.{" "}
							<a className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}