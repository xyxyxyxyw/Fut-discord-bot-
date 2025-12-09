// BOT FUT SIMPLE - PAR MIKEY
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

// CRÉE LE BOT
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// QUAND LE BOT DÉMARRE
client.on('ready', () => {
    console.log(`✅ ${client.user.tag} est en ligne!`);
    console.log('⚽ Bot FUT prêt!');
});

// COMMANDES
client.on('messageCreate', async message => {
    // Évite que le bot se réponde
    if (message.author.bot) return;
    
    // COMMANDE !aide
    if (message.content === '!aide') {
        const embed = new EmbedBuilder()
            .setTitle('🎮 BOT FUT - Commandes')
            .setColor(0x00FF00)
            .addFields(
                { name: '🎁 !pack', value: 'Ouvre un pack', inline: true },
                { name: '⚽ !equipe', value: 'Voir ton équipe', inline: true },
                { name: '🏪 !marche', value: 'Voir le marché', inline: true },
                { name: '💰 !coins', value: 'Tes coins', inline: true },
                { name: '🎮 !jouer', value: 'Jouer un match', inline: true },
                { name: '👤 !profil', value: 'Ton profil', inline: true }
            );
        
        await message.reply({ embeds: [embed] });
    }
    
    // COMMANDE !pack
    if (message.content === '!pack') {
        const joueurs = [
            'Kylian Mbappé - 91 ⭐ (PSG)',
            'Lionel Messi - 90 ⭐ (Miami)',
            'Erling Haaland - 91 ⭐ (Man City)',
            'Cristiano Ronaldo - 88 ⭐ (Al Nassr)',
            'Neymar Jr - 89 ⭐ (Al Hilal)',
            'Kevin De Bruyne - 91 ⭐ (Man City)',
            'Virgil van Dijk - 90 ⭐ (Liverpool)'
        ];
        
        const pack = [
            joueurs[Math.floor(Math.random() * joueurs.length)],
            joueurs[Math.floor(Math.random() * joueurs.length)],
            joueurs[Math.floor(Math.random() * joueurs.length)]
        ];
        
        const embed = new EmbedBuilder()
            .setTitle('🎁 PACK OUVERT!')
            .setColor(0xFFD700)
            .setDescription('**Tu as obtenu:**\n' + pack.join('\n'))
            .setFooter({ text: 'FUT Bot - Développé depuis mobile' });
        
        await message.reply({ embeds: [embed] });
    }
    
    // COMMANDE !equipe
    if (message.content === '!equipe') {
        const embed = new EmbedBuilder()
            .setTitle(`⚽ ÉQUIPE DE ${message.author.username}`)
            .setColor(0x0099FF)
            .setDescription('**Formation: 4-3-3**\nCote globale: 89 ⭐')
            .addFields(
                { name: 'Attaque', value: 'Haaland (91)\nMbappé (91)\nMessi (90)', inline: true },
                { name: 'Milieu', value: 'De Bruyne (91)\nModrić (88)\nPedri (86)', inline: true },
                { name: 'Défense', value: 'Van Dijk (90)\nDias (89)\nHernández (86)\nHakimi (84)', inline: true },
                { name: 'Gardien', value: 'Donnarumma (89)', inline: true }
            );
        
        await message.reply({ embeds: [embed] });
    }
    
    // COMMANDE !coins
    if (message.content === '!coins') {
        const coins = Math.floor(Math.random() * 100000) + 5000;
        await message.reply(`💰 **Tu as ${coins.toLocaleString()} FUT Coins!**`);
    }
    
    // COMMANDE !jouer
    if (message.content === '!jouer') {
        const scores = [
            '3-2 Victoire! 🏆 +500 coins',
            '1-1 Match nul! ⚖️ +200 coins',
            '4-0 Victoire! ⚽ +750 coins',
            '0-2 Défaite... 😢 +50 coins'
        ];
        const result = scores[Math.floor(Math.random() * scores.length)];
        
        await message.reply(`🎮 **Résultat du match:** ${result}`);
    }
    
    // COMMANDE !github
    if (message.content === '!github') {
        await message.reply('📱 **Ce bot a été codé depuis GitHub Mobile!**\nSans PC, juste un téléphone! 🎉');
    }
});

// DÉMARRE LE BOT
client.login('TON_TOKEN_ICI');
