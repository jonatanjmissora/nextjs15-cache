export const LoaderSpinner = () => {
	return (
		<div className="relative size-4">
			<div className="absolute inset-0 rounded-full bg-conic from-transparent to-white/70 animate-spin"></div>
			<div className="rounded-full absolute inset-[3px] bg-black"></div>
		</div>
	)
}
