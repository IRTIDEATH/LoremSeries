import {
	Plus,
	CircleHelp
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Features() {
	return (
		<div className="md:w-10/12 mt-10 mx-auto font-geist md:border-l-0 md:border-[1.2px] rounded-none">
			<div className="grid w-full grid-cols-1 grid-rows-4 md:grid-cols-3 md:mx-0 md:grid-rows-1">
				<div className="items-start justify-start border-x-[1.2px] border-t-[1.2px] md:border-t-0  transform-gpu  flex flex-col p-10">
					<div className="flex items-center gap-2 my-1">
						<CircleHelp className="w-4 h-4" />
						<p className="text-gray-600 dark:text-gray-400">
							Lorem {" "}
						</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-xl font-normal tracking-tighter md:text-2xl">
									Aut Consectetur <strong>Minima</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur, minima beatae magnam perspiciatis maiores.{" "}
							<a className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</a>
						</p>
					</div>
				</div>
				<div className="relative items-start justify-start border-l-[1.2px] border-r-[1.2px] border-t-[1.2px] md:border-r-0 md:border-t-0 flex flex-col p-10 transform-gpu">
					<Plus className="absolute bottom-[-17px] left-[-17px] text-yellow w-8 h-8" />

					<div className="flex items-center gap-2 my-1">
						<CircleHelp className="w-4 h-4" />
						<p className="text-gray-400">Lorem</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Aut Consectetur <strong>Minima</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta rerum numquam optio ipsum pariatur sunt.{" "}
							<a className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</a>
						</p>
					</div>
				</div>
				<div className="relative items-start justify-start border-l-[1.2px] border-r-[1.2px] border-t-[1.2px] md:border-r-0 md:border-t-0 flex flex-col p-10 transform-gpu">
					<Plus className="absolute bottom-[-17px] left-[-17px] text-yellow w-8 h-8" />

					<div className="flex items-center gap-2 my-1">
						<CircleHelp className="w-4 h-4" />
						<p className="text-gray-400">Lorem</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Aut Consectetur <strong>Minima</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus optio et dolorum sit error!{" "}
							<a className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</a>
						</p>
					</div>
				</div>
				<div className="items-start justify-start border-x-[1.2px] border-t-[1.2px] flex flex-col p-10">
					<div className="flex items-center gap-2 my-1">
						<CircleHelp className="w-4 h-4" />
						<p className="text-gray-400">Lorem</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Aut Consectetur <strong>Minima</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni magnam mollitia blanditiis, necessitatibus tempora?{" "}
							<Link className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</Link>
						</p>
					</div>
				</div>
				<div className="items-start justify-start border-x-[1.2px] border-t-[1.2px] flex flex-col p-10">
					<div className="flex items-center gap-2 my-1">
						<CircleHelp className="w-4 h-4" />
						<p className="text-gray-400">
							Lorem{" "}
						</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Aut Consectetur <strong>Minima</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi ullam, facilis nisi tenetur impedit?{" "}
							<a className="text-gray-50" href="/docs" target="_blank">
								Learn more
							</a>
						</p>
					</div>
				</div>
				<div className="items-start justify-start border-l-[1.2px] border-r-[1.2px] border-t-[1.2px] md:border-r-0 flex flex-col p-10 border-b-[1.2px] md:border-b-0">
					<div className="flex items-center gap-2 my-1">
						<CircleHelp className="w-4 h-4" />
						<p className="text-gray-400">
							Lorem{" "}
						</p>
					</div>
					<div className="mt-2">
						<div className="max-w-full">
							<div className="flex gap-3 ">
								<p className="max-w-lg text-2xl font-normal tracking-tighter">
									Aut Consectetur <strong>Minima</strong>
								</p>
							</div>
						</div>
						<p className="mt-2 text-sm text-left text-muted-foreground">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ut nulla accusantium aperiam officiis totam.{" "}
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