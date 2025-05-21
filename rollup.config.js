import copy from 'rollup-plugin-copy';

export default [
	// ───────────────── viewer bundle ─────────────────
	{
		input: 'src/Potree.js',
		treeshake: false,
		output: {
			file: 'build/potree/potree.js',
			format: 'umd',
			name: 'Potree',
			sourcemap: true,
		},
		plugins: [
			// copy every static folder your HTML references
			copy({
				targets: [
					{ src: 'libs/**/*',      dest: 'build/libs' },
					{ src: 'resources/**/*', dest: 'build/resources' },
					{ src: 'shaders/**/*',   dest: 'build/shaders' },
					{ src: 'thumbnails/**/*',dest: 'build/thumbnails' },  // optional
					{ src: 'models/**/*',    dest: 'build/models' }       // optional
				],
				verbose: true,
				copyOnce: false          // run each build
			})
		]
	},

	// ───────────────── worker bundles ─────────────────
	{
		input: 'src/workers/BinaryDecoderWorker.js',
		output: {
			file: 'build/potree/workers/BinaryDecoderWorker.js',
			format: 'es',
			sourcemap: false
		}
	},
	{
		input: 'src/modules/loader/2.0/DecoderWorker.js',
		output: {
			file: 'build/potree/workers/2.0/DecoderWorker.js',
			format: 'es',
			sourcemap: false
		}
	},
	{
		input: 'src/modules/loader/2.0/DecoderWorker_brotli.js',
		output: {
			file: 'build/potree/workers/2.0/DecoderWorker_brotli.js',
			format: 'es',
			sourcemap: false
		}
	}
];