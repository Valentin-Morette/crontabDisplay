const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api/crons', (req, res) => {
	exec('crontab -l', (err, stdout, stderr) => {
		if (err) {
			return res.status(500).json({ error: 'Impossible de lire le crontab', details: stderr });
		}

		const lines = stdout.split('\n').filter((line) => line.trim() !== '');

		let result = [];
		let currentTitle = null;

		for (const line of lines) {
			if (line.trim().startsWith('#')) {
				currentTitle = line.replace(/^#\s?/, ''); // Retire le # et l'espace
			} else {
				result.push({
					title: currentTitle || 'Sans description',
					command: line,
				});
				currentTitle = null;
			}
		}

		res.json({ crons: result });
	});
});

app.post('/api/cron/update', (req, res) => {
	const { crons } = req.body;

	// Recrée la crontab : ligne commentaire + ligne commande
	const newCron = crons.map((item) => `# ${item.title}\n${item.command}`).join('\n') + '\n';

	const { exec } = require('child_process');
	const child = exec('crontab -', (err) => {
		if (err) {
			console.error('Erreur en écrivant la crontab :', err);
			return res.status(500).json({ error: 'Erreur lors de la mise à jour' });
		}
		return res.json({ success: true });
	});

	child.stdin.write(newCron);
	child.stdin.end();
});

app.listen(port, () => {
	console.log(`Serveur cron en ligne sur http://localhost:${port}`);
});
