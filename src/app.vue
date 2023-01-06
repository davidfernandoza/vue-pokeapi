<template>
	<section>
		<nav>
			<ul>
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/pokemon">Pokemon</router-link>
				</li>
			</ul>
		</nav>
	</section>
	<router-view></router-view>
</template>
