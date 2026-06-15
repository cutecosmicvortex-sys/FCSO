import { logger } from '../utils/logger.js';


export const botConfig = {
  // =========================
  // BOT PRESENCE (what users see under the bot name)
  // =========================
  // `status` options:
  // - "online"    = green dot
  // - "idle"      = yellow moon
  // - "dnd"       = red do-not-disturb
  // - "invisible" = appears offline
  presence: {
    // Current online state shown on Discord.
    status: "dnd",

    // Activity lines shown under the bot name.
    // `type` number mapping from Discord:
    // 0 = Playing
    // 1 = Streaming
    // 2 = Listening
    // 3 = Watching
    // 4 = Custom
    // 5 = Competing
    activities: [
      {
        // Text users will see (example: "Playing /help | Titan Bot").
        name: "Working hard today, For an better tommorow",
        // Activity type number (0 = Playing).
        type: 0, 
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    // Bot owner user IDs (comma-separated in OWNER_IDS env var).
    // Owners can access owner/admin-level bot commands.
    owners: process.env.OWNER_IDS?.split(",") || [],

    // Default wait time between command uses (in seconds).
    defaultCooldown: 3, 

    // If true, old commands are removed before re-registering.
    deleteCommands: false,

    // Optional server ID used for testing slash commands quickly.
    testGuildId: process.env.TEST_GUILD_ID,
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    // Default questions shown when someone fills out an application.
    defaultQuestions: [
      { question: "What is your name?", required: true },
      { question: "How old are you?", required: true },
      { question: "Why do you want to join?", required: true },
    ],

    // Embed colors by application status.
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    // How long users must wait before submitting another application (hours).
    applicationCooldown: 24, 

    // Auto-delete denied applications after this many days.
    deleteDeniedAfter: 7, 

    // Auto-delete approved applications after this many days.
    deleteApprovedAfter: 30, 

    // Role IDs allowed to manage applications.
    managerRoles: [], // Will be populated from environment or database
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  // IMPORTANT: This is the SINGLE SOURCE OF TRUTH for all bot colors
  embeds: {
    colors: {
      // Main brand colors.
      primary: "#336699", 
      secondary: "#2F3136", 

      // Standard status colors for success/error/warning/info messages.
      success: "#57F287", 
      error: "#ED4245", 
      warning: "#FEE75C", 
      info: "#3498DB", 

      // Neutral utility colors.
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      // Discord-style palette shortcuts.
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      // Feature-specific colors.
      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },
      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      // Ticket priority color mapping.
      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      // Default footer text used in bot embeds.
      text: "Titan Bot",
      // Footer icon URL (null = no icon).
      icon: null,
    },
    // Default thumbnail URL for embeds (null = no thumbnail).
    thumbnail: null,
    author: {
      // Optional default embed author block.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: {
      // Currency display name.
      name: "coins",
      // Plural display name.
      namePlural: "coins",
      // Currency symbol shown in balances.
      symbol: "$",
    },

    // Starting balance for new users.
    startingBalance: 0,

    // Maximum bank amount before upgrades (if upgrades are used).
    baseBankCapacity: 100000,

    // Daily reward amount.
    dailyAmount: 100,

    // Work command random payout range.
    workMin: 10,
    workMax: 100,

    // Beg command random payout range.
    begMin: 5,
    begMax: 50,

    // Chance to succeed when robbing (0.4 = 40%).
    robSuccessRate: 0.4,

    // Jail time after failed rob (milliseconds).
    // 3600000 = 1 hour.
    robFailJailTime: 3600000, 
  },

  // =========================
  // SHOP SETTINGS
  // =========================
  // Add shop defaults here when needed.
  shop: {
    
  },

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    // Category ID where new tickets are created (null = no forced category).
    defaultCategory: null,

    // Role IDs allowed to manage/support tickets.
    supportRoles: [],

    // Priority options users/staff can assign.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "None",
      },
      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "Low",
      },
      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "Medium",
      },
      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "High",
      },
      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "Urgent",
      },
    },

    // Default priority for new tickets.
    defaultPriority: "none",

    // Category ID where closed tickets are archived.
    archiveCategory: null,

    // Channel ID where ticket logs are sent.
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    // Default giveaway duration in milliseconds.
    // 86400000 = 24 hours.
    defaultDuration: 86400000, 

    // Allowed winner count range.
    minimumWinners: 1,
    maximumWinners: 10,

    // Allowed giveaway duration range in milliseconds.
    // 300000 = 5 minutes.
    minimumDuration: 300000, 
    // 2592000000 = 30 days.
    maximumDuration: 2592000000, 

    // Role IDs allowed to host giveaways.
    allowedRoles: [],

    // Role IDs that bypass giveaway restrictions.
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    // Role ID given to users on their birthday.
    defaultRole: null,

    // Channel ID where birthday announcements are posted.
    announcementChannel: null,

    // Timezone used to calculate birthday dates.
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    // Message shown when posting the verification panel.
    defaultMessage: "Click the button below to verify yourself and gain access to the server!",

    // Text on the verification button.
    defaultButtonText: "Verify",

    // Automatic verification behavior.
    autoVerify: {
      // How automatic verification decides who is auto-approved:
      // - "none"        = everyone is auto-verified immediately
      // - "account_age" = account must be older than set days
      // - "server_size" = auto-verify everyone only in smaller servers
      defaultCriteria: "none",

      // Days used when `defaultCriteria` is `account_age`.
      defaultAccountAgeDays: 7,

      // Member count threshold used when `defaultCriteria` is `server_size`.
      // Example: 1000 means auto-verify if server has fewer than 1000 members.
      serverSizeThreshold: 1000,

      // Allowed safety limits for account-age requirements.
      // 1 = minimum day, 365 = maximum days.
      minAccountAge: 1,      
      maxAccountAge: 365,    

      // If true, user receives a DM after verification.
      sendDMNotification: true,

      // Human-readable descriptions for each criteria mode.
      criteria: {
        account_age: "Account must be older than specified days",
        server_size: "All users if server has less than 1000 members",
        none: "All users immediately"
      }
    },

    // Minimum time between verification attempts (milliseconds).
    // 5000 = 5 seconds.
    verificationCooldown: 5000,  

    // Maximum failed attempts allowed inside the time window below.
    maxVerificationAttempts: 3,   

    // Time window for counting attempts (milliseconds).
    // 60000 = 1 minute.
    attemptWindow: 60000,          

    // In-memory safety limits (helps avoid unbounded memory growth).
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    // Cleanup frequency for cooldown/attempt maps (milliseconds).
    // 300000 = 5 minutes.
    cooldownCleanupInterval: 300000, 
    // Maximum metadata payload size for audit entries (bytes).
    maxAuditMetadataBytes: 4096,
    // Maximum number of audit entries kept in memory.
    maxInMemoryAuditEntries: 1000,
  // If true, log every verification action.
  logAllVerifications: true,
  // If true, preserve verification audit history.
  keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES
  // =========================
  welcome: {
    // Welcome template posted when a user joins.
    // Placeholders: {user}, {server}, {memberCount}
    defaultWelcomeMessage:
      "Welcome {user} to {server}! We now have {memberCount} members!",
    // Goodbye template posted when a user leaves.
    // Placeholders: {user}, {memberCount}
    defaultGoodbyeMessage:
      "{user} has left the server. We now have {memberCount} members.",
    // Channel ID for welcome messages.
    defaultWelcomeChannel: null,
    // Channel ID for goodbye messages.
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: {
      // Default naming/description templates for counter entries.
      name: "{name} Counter",
      description: "Server {name} counter",
      // Channel type used for counters (typically "voice").
      type: "voice",
      // Channel name format. `{count}` is replaced automatically.
      channelName: "{name}-{count}",
    },
    permissions: {
      // Default denied permissions for the counter channel.
      deny: ["VIEW_CHANNEL"],
      // Default allowed permissions for the counter channel.
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      // Default response messages for counter actions.
      created: "✅ Created counter **{name}**",
      deleted: "🗑️ Deleted counter **{name}**",
      updated: "🔄 Updated counter **{name}**",
    },
    types: {
      // Built-in counter types and how each count is calculated.
      members: {
        name: "👥 Members",
        description: "Total members in the server",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 Bots",
        description: "Total bot accounts in the server",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 Humans",
        description: "Total human members (non-bots)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES
  // =========================
  messages: {
    noPermission: "You do not have permission to use this command.",
    cooldownActive: "Please wait {time} before using this command again.",
    errorOccurred: "An error occurred while executing this command.",
    missingPermissions:
      "I am missing required permissions to perform this action.",
    commandDisabled: "This command has been disabled.",
    maintenanceMode: "The bot is currently in maintenance mode.",
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  // Set any feature to `false` to disable it globally.
  features: {
    // Core systems.
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    // Community engagement systems.
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    // Security and self-service systems.
    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    // Utility/quality-of-life modules.
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
  },
};


export function validateConfig(config) {
  const errors = [];

  
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN exists:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID exists:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST exists:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required (DISCORD_TOKEN or TOKEN environment variable)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required (CLIENT_ID environment variable)");
  }

  
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.POSTGRES_HOST) {
      errors.push("PostgreSQL host is required in production (POSTGRES_HOST environment variable)");
    }
    if (!process.env.POSTGRES_USER) {
      errors.push("PostgreSQL user is required in production (POSTGRES_USER environment variable)");
    }
    if (!process.env.POSTGRES_PASSWORD) {
      errors.push("PostgreSQL password is required in production (POSTGRES_PASSWORD environment variable)");
    }
  }

  return errors;
}


const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}


export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );
  
  // Convert the result to integer if it's a hex string
  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;




import os
import discord
import asyncio
import aiosqlite
import random
import string
from discord.ext import commands
from discord import app_commands, ui
from datetime import datetime, timedelta, timezone

# --- CONFIGURATION ---
# Restored to /data/ for your mounted Railway Volume
DATABASE = '/data/gsp_bot.db' 

intents = discord.Intents.all()
bot = commands.Bot(command_prefix='!', intents=intents)

# Visual Identity
GSP_CUSTOM_ORANGE = discord.Color.from_str("#ff640f")
GSP_RED = discord.Color.red()
GSP_YELLOW = 0xFFFF00
SEPARATOR = "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Channel IDs
CMD_CHANNEL_ID = 1491403907329556630
CHANNELS = {
    'arrest_logs': 1491396788287045784,
    'citation_logs': 1491401885280637031,
    'infractions': 1491402935341678634,
    'strike_confirm': 1491893789952835584
}

# Role IDs
ROLES = {
    'strike_1': 1489800614098505858,
    'strike_2': 1489800660978499727,
    'up_for_ban': 1489800716452102255,
    'strike_confirmer': 1491765593639096351,
    'supervisor': 1491916962861940947
}

# --- DATABASE & UTILITIES ---

def get_pst_time():
    utc_now = datetime.now(timezone.utc)
    pst_now = utc_now - timedelta(hours=8)
    return pst_now.strftime('%B %d, %Y at %H:%M')

def format_time_ago(ts_string):
    try:
        past = datetime.strptime(ts_string, '%B %d, %Y at %H:%M')
        now = datetime.now(timezone.utc).replace(tzinfo=None) - timedelta(hours=8)
        diff = now - past
        if diff.days > 0: return f"{diff.days} days ago"
        hours = diff.seconds // 3600
        if hours > 0: return f"{hours} hours ago"
        return f"{diff.seconds // 60} minutes ago"
    except:
        return "Unknown"

async def init_db():
    db_dir = os.path.dirname(DATABASE)
    if db_dir and not os.path.exists(db_dir):
        os.makedirs(db_dir)
    async with aiosqlite.connect(DATABASE) as db:
        await db.execute('''CREATE TABLE IF NOT EXISTS arrests (id_code TEXT PRIMARY KEY, suspect TEXT, officer_id INTEGER, secondaries TEXT, charges TEXT, mugshot TEXT, timestamp TEXT)''')
        await db.execute('''CREATE TABLE IF NOT EXISTS citations (id_code TEXT PRIMARY KEY, suspect TEXT, officer_id INTEGER, vehicle TEXT, location TEXT, reason TEXT, timestamp TEXT)''')
        await db.execute('''CREATE TABLE IF NOT EXISTS bolos (id_code TEXT PRIMARY KEY, suspect TEXT, officer_id INTEGER, reason TEXT, vehicle TEXT, plate TEXT, expiry_timestamp TEXT, timestamp TEXT)''')
        await db.execute('''CREATE TABLE IF NOT EXISTS warrants (id_code TEXT PRIMARY KEY, suspect TEXT, officer_id INTEGER, reason TEXT, risk_level TEXT, expiry_timestamp TEXT, timestamp TEXT)''')
        await db.execute('''CREATE TABLE IF NOT EXISTS infractions (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, issuer_id INTEGER, reason TEXT, punishment TEXT, proof TEXT, msg_url TEXT, is_active INTEGER DEFAULT 1, is_processed INTEGER DEFAULT 0, expiry_timestamp TEXT, timestamp TEXT)''')
        await db.commit()

async def generate_unique_id():
    async with aiosqlite.connect(DATABASE) as db:
        while True:
            new_id = f"GSP{''.join(random.choices(string.digits, k=4))}"
            query = "SELECT 1 FROM arrests WHERE id_code = ? UNION SELECT 1 FROM citations WHERE id_code = ? UNION SELECT 1 FROM bolos WHERE id_code = ? UNION SELECT 1 FROM warrants WHERE id_code = ?"
            async with db.execute(query, (new_id, new_id, new_id, new_id)) as cursor:
                if not await cursor.fetchone(): return new_id

async def is_cmd_channel(itx: discord.Interaction):
    if itx.channel.id != CMD_CHANNEL_ID:
        if not itx.response.is_done():
            await itx.response.send_message(f"❌ Commands restricted to <#{CMD_CHANNEL_ID}>.", ephemeral=True)
        return False
    return True

# --- UI COMPONENTS ---

class ClearAllDataView(ui.View):
    def __init__(self):
        super().__init__(timeout=30)

    @ui.button(label="Confirm Wipe", style=discord.ButtonStyle.success)
    async def confirm(self, itx: discord.Interaction, button: ui.Button):
        if not itx.user.guild_permissions.administrator:
            return await itx.response.send_message("❌ Only Administrators can confirm a database wipe.", ephemeral=True)
        async with aiosqlite.connect(DATABASE) as db:
            tables = ["arrests", "citations", "bolos", "warrants", "infractions"]
            for tbl in tables:
                await db.execute(f"DELETE FROM {tbl}")
            await db.commit()
        await itx.response.edit_message(content="⚠️ **DATABASE WIPE COMPLETE.** All tables have been cleared.", view=None)

    @ui.button(label="Cancel", style=discord.ButtonStyle.danger)
    async def cancel(self, itx: discord.Interaction, button: ui.Button):
        await itx.message.delete()

class StrikeConfirmView(ui.View):
    def __init__(self, trooper: discord.Member, infraction_data: list, original_reason: str):
        super().__init__(timeout=None)
        self.trooper = trooper
        self.infraction_data = infraction_data
        self.infraction_ids = [row[0] for row in infraction_data]
        self.original_reason = original_reason

    @ui.button(label='Confirm Strike', style=discord.ButtonStyle.success)
    async def confirm_strike(self, itx: discord.Interaction, button: ui.Button):
        if itx.guild.get_role(ROLES['strike_confirmer']) not in itx.user.roles:
            return await itx.response.send_message("❌ Unauthorized.", ephemeral=True)
        s1, s2, ub = [itx.guild.get_role(ROLES[r]) for r in ['strike_1', 'strike_2', 'up_for_ban']]
        target_role, display_name = s1, "Strike 1"
        if ub in self.trooper.roles:
            return await itx.response.send_message("⚠️ Already Up For Termination.", ephemeral=True)
        elif s2 in self.trooper.roles:
            target_role, display_name = ub, "Up For Termination"
        elif s1 in self.trooper.roles:
            target_role, display_name = s2, "Strike 2"
        await self.trooper.add_roles(target_role)
        async with aiosqlite.connect(DATABASE) as db:
            for inf_id in self.infraction_ids:
                await db.execute("UPDATE infractions SET is_processed = 1 WHERE id = ?", (inf_id,))
            await db.commit()
        links = "\n".join([f"• [Infraction #{r[0]}]({r[1]})" for r in self.infraction_data])
        log_embed = discord.Embed(title="**STRIKE**", color=GSP_RED)
        log_embed.description = f"{SEPARATOR}\n**Trooper:** {self.trooper.mention}\n**Reason:** {self.original_reason}\n**Infractions:**\n{links}\n\n**Strike Level:** `{display_name}`\n{SEPARATOR}"
        log_embed.set_footer(text=f"Confirmed by {itx.user.display_name}")
        inf_channel = bot.get_channel(CHANNELS['infractions'])
        if inf_channel: await inf_channel.send(content=f"{self.trooper.mention}", embed=log_embed)
        await itx.response.edit_message(content=f"✅ Strike applied for {self.trooper.mention}.", embed=log_embed, view=None)

    @ui.button(label='Decline Strike', style=discord.ButtonStyle.danger)
    async def decline_strike(self, itx: discord.Interaction, button: ui.Button):
        if itx.guild.get_role(ROLES['strike_confirmer']) not in itx.user.roles:
            return await itx.response.send_message("❌ Unauthorized.", ephemeral=True)
        async with aiosqlite.connect(DATABASE) as db:
            for inf_id in self.infraction_ids:
                await db.execute("UPDATE infractions SET is_processed = 1 WHERE id = ?", (inf_id,))
            await db.commit()
        await itx.message.delete()
        await itx.response.send_message(f"✅ Strike for {self.trooper.mention} was declined.", ephemeral=True)

class ClearRecordConfirm(ui.View):
    def __init__(self, original_user, owner_id, record_id, table):
        super().__init__(timeout=60)
        self.original_user = original_user
        self.owner_id = owner_id
        self.record_id = record_id
        self.table = table

    @ui.button(label="Permanently Delete", style=discord.ButtonStyle.danger)
    async def confirm_delete(self, itx: discord.Interaction, button: ui.Button):
        if itx.user.id != self.original_user.id:
            return await itx.response.send_message("❌ This is not your menu.", ephemeral=True)
        async with aiosqlite.connect(DATABASE) as db:
            await db.execute(f"DELETE FROM {self.table} WHERE id_code = ?", (self.record_id,))
            await db.commit()
        await itx.response.send_message(f"🗑️ Record `{self.record_id}` deleted from **{self.table}**.", ephemeral=True)
        await itx.message.delete()

class ExpiryDropdown(ui.Select):
    def __init__(self, callback_func):
        options = [discord.SelectOption(label="24 Hours", value="24"), discord.SelectOption(label="48 Hours", value="48"), discord.SelectOption(label="72 Hours", value="72"), discord.SelectOption(label="1 Week", value="168")]
        super().__init__(placeholder="Duration Selection", options=options)
        self.callback_func = callback_func
    async def callback(self, itx: discord.Interaction):
        await self.callback_func(itx, int(self.values[0]))

class InfractionExpiryDropdown(ui.Select):
    def __init__(self, callback_func):
        options = [
            discord.SelectOption(label="24 Hours", value="24"), discord.SelectOption(label="48 Hours", value="48"), discord.SelectOption(label="72 Hours", value="72"),
            discord.SelectOption(label="1 Week", value="168"), discord.SelectOption(label="2 Weeks", value="336"), discord.SelectOption(label="3 Weeks", value="504"),
            discord.SelectOption(label="1 Month", value="720"), discord.SelectOption(label="1.5 Months", value="1080"), discord.SelectOption(label="2 Months", value="1440")
        ]
        super().__init__(placeholder="Select Infraction Expiry", options=options)
        self.callback_func = callback_func
    async def callback(self, itx: discord.Interaction):
        await self.callback_func(itx, int(self.values[0]))

# --- COMMANDS ---

@bot.tree.command(name='clear_all_data', description='WIPE ALL DATABASE TABLES (ADMIN ONLY)')
@app_commands.checks.has_permissions(administrator=True)
async def clear_all_data(itx: discord.Interaction):
    await itx.response.send_message("🚨 **Are you sure?**", view=ClearAllDataView(), ephemeral=True)

@bot.tree.command(name='info', description='Bot support information')
async def info(itx: discord.Interaction):
    if not await is_cmd_channel(itx): return
    e = discord.Embed(title="**INFORMATION**", description=f"{SEPARATOR}\nQuestions/Bugs: DM **1K-96 | DOGGO123**.\n{SEPARATOR}", color=GSP_CUSTOM_ORANGE)
    e.set_footer(text=f"Requested by {itx.user.display_name}")
    await itx.response.send_message(embed=e)

@bot.tree.command(name='clear_record', description='Permanently delete a record')
async def clear_record(itx: discord.Interaction, record_id: str):
    if not await is_cmd_channel(itx): return
    rid = record_id.upper()
    async with aiosqlite.connect(DATABASE) as db:
        found = False
        for tbl in ["arrests", "citations", "bolos", "warrants"]:
            async with db.execute(f"SELECT officer_id FROM {tbl} WHERE id_code = ?", (rid,)) as c:
                row = await c.fetchone()
                if row:
                    found, target_tbl, owner_id = True, tbl, row[0]
                    break
        if not found:
            return await itx.response.send_message(f"❌ Record `{rid}` not found.", ephemeral=True)
        if itx.user.id != owner_id and itx.guild.get_role(ROLES['supervisor']) not in itx.user.roles:
            return await itx.response.send_message("❌ Unauthorized.", ephemeral=True)
        await itx.response.send_message(f"⚠️ Delete `{rid}` from **{target_tbl}**?", view=ClearRecordConfirm(itx.user, owner_id, rid, target_tbl), ephemeral=True)

@bot.tree.command(name='trooper_performance', description='View trooper lifetime stats')
async def trooper_performance(itx: discord.Interaction, trooper: discord.Member):
    if not await is_cmd_channel(itx): return
    await itx.response.defer()
    async with aiosqlite.connect(DATABASE) as db:
        data = []
        for tbl in ["arrests", "citations", "bolos", "warrants"]:
            async with db.execute(f"SELECT COUNT(*) FROM {tbl} WHERE officer_id = ?", (trooper.id,)) as c:
                res = await c.fetchone()
                data.append(res[0] if res else 0)
        async with db.execute("SELECT COUNT(*) FROM infractions WHERE user_id = ?", (trooper.id,)) as c:
            inf_res = await c.fetchone()
            inf = inf_res[0] if inf_res else 0
    s1, s2, ub = [itx.guild.get_role(ROLES[r]) for r in ['strike_1', 'strike_2', 'up_for_ban']]
    cur = "None"
    if ub in trooper.roles: cur = "⚠️ Up For Termination"
    elif s2 in trooper.roles: cur = "Strike 2"
    elif s1 in trooper.roles: cur = "Strike 1"
    e = discord.Embed(title=f"**PERFORMANCE: {trooper.display_name}**", color=GSP_CUSTOM_ORANGE)
    e.description = f"{SEPARATOR}\n**Status:** `{cur}`\n🚨 **Arrests:** `{data[0]}`\n🎫 **Citations:** `{data[1]}`\n📡 **BOLOs:** `{data[2]}`\n⚖️ **Warrants:** `{data[3]}`\n⚠️ **Infractions:** `{inf}`\n{SEPARATOR}"
    e.set_footer(text=f"Requested by {itx.user.display_name}")
    await itx.followup.send(embed=e)

@bot.tree.command(name='search_record', description='Search any GSP ID')
async def search_record(itx: discord.Interaction, record_id: str):
    if not await is_cmd_channel(itx): return
    await itx.response.defer()
    rid = record_id.upper()
    async with aiosqlite.connect(DATABASE) as db:
        for tbl, title, color in [("arrests", "**ARREST RECORD**", GSP_CUSTOM_ORANGE), ("citations", "**CITATION RECORD**", GSP_YELLOW), ("bolos", "**BOLO RECORD**", GSP_RED), ("warrants", "**WARRANT RECORD**", GSP_RED)]:
            async with db.execute(f"SELECT * FROM {tbl} WHERE id_code = ?", (rid,)) as c:
                row = await c.fetchone()
                if row:
                    off = await bot.fetch_user(row[2])
                    e = discord.Embed(title=title, color=color)
                    if tbl == "arrests":
                        e.description = f"{SEPARATOR}\n**ID:** {row[0]}\n**Officer:** {off.mention}\n**Suspect:** {row[1]}\n**Secondaries:** {row[3]}\n**Charges:** {row[4]}\n**Date:** {row[6]}\n{SEPARATOR}"
                        if row[5] != "N/A": e.set_image(url=row[5])
                    elif tbl == "citations":
                        e.description = f"{SEPARATOR}\n**ID:** {row[0]}\n**Officer:** {off.mention}\n**Suspect:** {row[1]}\n**Vehicle:** {row[3]}\n**Location:** {row[4]}\n**Reason:** {row[5]}\n**Date:** {row[6]}\n{SEPARATOR}"
                    elif tbl == "bolos":
                        e.description = f"{SEPARATOR}\n**ID:** {row[0]}\n**Officer:** {off.mention}\n**Suspect:** {row[1]}\n**Vehicle:** {row[4]}\n**Plate:** {row[5]}\n**Reason:** {row[3]}\n**Expires:** {row[6]}\n**Date:** {row[7]}\n{SEPARATOR}"
                    else: # warrants
                        e.description = f"{SEPARATOR}\n**ID:** {row[0]}\n**Officer:** {off.mention}\n**Suspect:** {row[1]}\n**Reason:** {row[3]}\n**Risk Level:** {row[4]}\n**Expires:** {row[5]}\n**Date:** {row[6]}\n{SEPARATOR}"
                    e.set_footer(text=f"Logged by {off.display_name}")
                    return await itx.followup.send(embed=e)
    await itx.followup.send(f"❌ `{rid}` not found.")

@bot.tree.command(name='infraction_log', description='Log misconduct')
async def infraction_log(itx: discord.Interaction, trooper: discord.Member, reason: str, punishment: str, proof: str = "None"):
    if not await is_cmd_channel(itx): return
    if itx.guild.get_role(ROLES['supervisor']) not in itx.user.roles: return await itx.response.send_message("❌ Restricted.", ephemeral=True)
    async def complete_infraction(itx_select, hours):
        ts = get_pst_time()
        expire_at = (datetime.now(timezone.utc) + timedelta(hours=hours)).isoformat()
        e = discord.Embed(title="**INFRACTION LOGGED**", color=GSP_RED)
        e.description = f"{SEPARATOR}\n**Trooper:** {trooper.mention}\n**Reason:** {reason}\n**Punishment:** {punishment}\n**Proof:** {proof}\n{SEPARATOR}"
        e.set_footer(text=f"Logged by {itx.user.display_name}")
        log_msg = await bot.get_channel(CHANNELS['infractions']).send(content=f"{trooper.mention}", embed=e)
        async with aiosqlite.connect(DATABASE) as db:
            await db.execute('''INSERT INTO infractions (user_id, issuer_id, reason, punishment, proof, msg_url, expiry_timestamp, timestamp) VALUES (?,?,?,?,?,?,?,?)''', (trooper.id, itx.user.id, reason, punishment, proof, log_msg.jump_url, expire_at, ts))
            await db.commit()
            async with db.execute("SELECT id, msg_url FROM infractions WHERE user_id = ? AND is_processed = 0", (trooper.id,)) as c:
                rows = await c.fetchall()
            if len(rows) >= 3:
                s1, s2 = itx.guild.get_role(ROLES['strike_1']), itx.guild.get_role(ROLES['strike_2'])
                next_lvl = "Strike 1"
                if s2 in trooper.roles: next_lvl = "Up For Termination"
                elif s1 in trooper.roles: next_lvl = "Strike 2"
                links = "\n".join([f"• [Infraction #{r[0]}]({r[1]})" for r in rows])
                alert = discord.Embed(title="**⚖️ STRIKE ELIGIBILITY ALERT**", color=GSP_RED)
                alert.description = f"{SEPARATOR}\n**Trooper:** {trooper.mention}\n**Reason:** {reason}\n**Infractions:**\n{links}\n\n**Next Strike Level:** `{next_lvl}`\n{SEPARATOR}"
                alert.set_footer(text="GSP Central Notification")
                await bot.get_channel(CHANNELS['strike_confirm']).send(content=f"{trooper.mention}", embed=alert, view=StrikeConfirmView(trooper, rows, reason))
        await itx_select.response.send_message("✅ Infraction logged.", ephemeral=True)
    await itx.response.send_message("Select Duration:", view=ui.View().add_item(InfractionExpiryDropdown(complete_infraction)), ephemeral=True)

@bot.tree.command(name='search_user', description='NCIC Name Lookup')
async def search_user(itx: discord.Interaction, suspect_name: str):
    if not await is_cmd_channel(itx): return
    await itx.response.defer()
    now = datetime.now(timezone.utc).isoformat()
    async with aiosqlite.connect(DATABASE) as db:
        async with db.execute("SELECT id_code, reason FROM warrants WHERE suspect = ? AND expiry_timestamp > ?", (suspect_name, now)) as c: warrants = await c.fetchall()
        async with db.execute("SELECT id_code, reason FROM bolos WHERE suspect = ? AND expiry_timestamp > ?", (suspect_name, now)) as c: bolos = await c.fetchall()
        async with db.execute("SELECT timestamp FROM arrests WHERE suspect = ? ORDER BY timestamp DESC LIMIT 1", (suspect_name,)) as c: last_arrest = await c.fetchone()
    e = discord.Embed(title=f"**NCIC: {suspect_name}**", color=GSP_RED if (warrants or bolos) else discord.Color.green())
    w_t = "\n".join([f"• `{w[0]}`: {w[1]}" for w in warrants]) if warrants else "None"
    b_t = "\n".join([f"• `{b[0]}`: {b[1]}" for b in bolos]) if bolos else "None"
    e.description = f"{SEPARATOR}\n**Warrants:** {w_t}\n**BOLOs:** {b_t}\n**Last Arrest:** {format_time_ago(last_arrest[0]) if last_arrest else 'No priors.'}\n{SEPARATOR}"
    e.set_footer(text=f"Requested by {itx.user.display_name}")
    await itx.followup.send(embed=e)

@bot.tree.command(name='arrest_log', description='Record an arrest')
async def arrest_log(itx: discord.Interaction, suspect: str, charges: str, secondaries: str = "N/A", mugshot_url: str = "N/A"):
    if not await is_cmd_channel(itx): return
    await itx.response.defer(ephemeral=True)
    id_code, ts = await generate_unique_id(), get_pst_time()
    async with aiosqlite.connect(DATABASE) as db:
        await db.execute("INSERT INTO arrests VALUES (?,?,?,?,?,?,?)", (id_code, suspect, itx.user.id, secondaries, charges, mugshot_url, ts))
        await db.commit()
    e = discord.Embed(title="**ARREST RECORD**", color=GSP_CUSTOM_ORANGE)
    e.description = f"{SEPARATOR}\n**ID:** {id_code}\n**Officer:** {itx.user.mention}\n**Suspect:** {suspect}\n**Secondaries:** {secondaries}\n**Charges:** {charges}\n**Date:** {ts}\n{SEPARATOR}"
    if mugshot_url != "N/A" and mugshot_url.startswith("http"): e.set_image(url=mugshot_url)
    e.set_footer(text=f"Logged by {itx.user.display_name}")
    await bot.get_channel(CHANNELS['arrest_logs']).send(embed=e)
    await itx.followup.send(f"✅ Logged `{id_code}`")

@bot.tree.command(name='citation_log', description='Record a citation')
async def citation_log(itx: discord.Interaction, suspect: str, vehicle: str, location: str, reason: str):
    if not await is_cmd_channel(itx): return
    await itx.response.defer(ephemeral=True)
    id_code, ts = await generate_unique_id(), get_pst_time()
    async with aiosqlite.connect(DATABASE) as db:
        await db.execute("INSERT INTO citations VALUES (?,?,?,?,?,?,?)", (id_code, suspect, itx.user.id, vehicle, location, reason, ts))
        await db.commit()
    e = discord.Embed(title="**CITATION RECORD**", color=GSP_YELLOW)
    e.description = f"{SEPARATOR}\n**ID:** {id_code}\n**Officer:** {itx.user.mention}\n**Suspect:** {suspect}\n**Vehicle:** {vehicle}\n**Location:** {location}\n**Reason:** {reason}\n**Date:** {ts}\n{SEPARATOR}"
    e.set_footer(text=f"Logged by {itx.user.display_name}")
    await bot.get_channel(CHANNELS['citation_logs']).send(embed=e)
    await itx.followup.send(f"✅ Logged `{id_code}`")

@bot.tree.command(name='bolo_log', description='Issue a BOLO')
async def bolo_log(itx: discord.Interaction, suspect: str, vehicle: str, reason: str, plate: str = "Unknown"):
    if not await is_cmd_channel(itx): return
    async def post_bolo(itx_s, hours):
        id_code, ts, expire = await generate_unique_id(), get_pst_time(), (datetime.now(timezone.utc) + timedelta(hours=hours)).isoformat()
        async with aiosqlite.connect(DATABASE) as db:
            await db.execute("INSERT INTO bolos VALUES (?,?,?,?,?,?,?,?)", (id_code, suspect, itx.user.id, reason, vehicle, plate, expire, ts))
            await db.commit()
        e = discord.Embed(title="**BOLO ACTIVE**", color=GSP_RED)
        e.description = f"{SEPARATOR}\n**ID:** {id_code}\n**Officer:** {itx.user.mention}\n**Suspect:** {suspect}\n**Vehicle:** {vehicle}\n**Plate:** {plate}\n**Reason:** {reason}\n**Date:** {ts}\n{SEPARATOR}"
        e.set_footer(text=f"Logged by {itx.user.display_name}")
        await itx_s.channel.send(embed=e)
        await itx_s.response.send_message(f"✅ BOLO Issued.", ephemeral=True)
    await itx.response.send_message("Duration:", view=ui.View().add_item(ExpiryDropdown(post_bolo)), ephemeral=True)

@bot.tree.command(name='warrant_log', description='Issue a warrant')
async def warrant_log(itx: discord.Interaction, suspect: str, reason: str, risk: str = "Medium"):
    if not await is_cmd_channel(itx): return
    async def post_war(itx_s, hours):
        id_code, ts, expire = await generate_unique_id(), get_pst_time(), (datetime.now(timezone.utc) + timedelta(hours=hours)).isoformat()
        async with aiosqlite.connect(DATABASE) as db:
            await db.execute("INSERT INTO warrants VALUES (?,?,?,?,?,?,?)", (id_code, suspect, itx.user.id, reason, risk, expire, ts))
            await db.commit()
        e = discord.Embed(title="**WARRANT ACTIVE**", color=GSP_RED)
        e.description = f"{SEPARATOR}\n**ID:** {id_code}\n**Officer:** {itx.user.mention}\n**Suspect:** {suspect}\n**Reason:** {reason}\n**Risk Level:** {risk}\n**Date:** {ts}\n{SEPARATOR}"
        e.set_footer(text=f"Logged by {itx.user.display_name}")
        await itx_s.channel.send(embed=e)
        await itx_s.response.send_message(f"✅ Warrant Issued.", ephemeral=True)
    await itx.response.send_message("Duration:", view=ui.View().add_item(ExpiryDropdown(post_war)), ephemeral=True)

@bot.tree.command(name="user_info", description="Discord profile lookup")
async def user_info(itx: discord.Interaction, trooper: discord.Member):
    if not await is_cmd_channel(itx): return
    e = discord.Embed(title=f"**PROFILE: {trooper.display_name}**", color=GSP_CUSTOM_ORANGE)
    e.description = f"{SEPARATOR}\n**ID:** `{trooper.id}`\n**Join Date:** {trooper.joined_at.strftime('%Y-%m-%d') if trooper.joined_at else 'N/A'}\n{SEPARATOR}"
    e.set_footer(text=f"Requested by {itx.user.display_name}")
    await itx.response.send_message(embed=e)

@bot.event
async def on_ready():
    await init_db()
    try:
        synced = await bot.tree.sync()
        print(f"GSP Systems Online. Synced {len(synced)} commands.")
    except Exception as e:
        print(f"Sync failed: {e}")

bot.run(os.getenv("DISCORD_TOKEN"))
