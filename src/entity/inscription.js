// Fichier: src/auth.js

/**
 * Représente un utilisateur.
 * Dans une vraie application, cela pourrait être un modèle de BDD.
 */
class User {
  constructor(email, passwordHash) {
    this.email = email;
    this.passwordHash = passwordHash; // Important: Ne jamais stocker de mdp en clair!
    this.id = Math.random().toString(36).substring(2);
    this.createdAt = new Date();
  }
}

/**
 * Simule l'inscription d'un nouvel utilisateur.
 * (Dans la vraie vie, on hacherait le mot de passe et on l'enregistrerait en BDD).
 */
function inscription(email, password) {
  console.log(`[AuthService] Tentative d'inscription pour ${email}`);
  
  
  if (!email || !password || password.length < 8) {
    console.error("[AuthService] Données invalides pour l'inscription.");
    return null;
  }

  // Simule le hachage du mot de passe
  const passwordHash = `hashed_${password}_${new Date().getTime()}`;
  
  const newUser = new User(email, passwordHash);
  console.log(`[AuthService] Utilisateur ${newUser.email} (ID: ${newUser.id}) créé.`);
  return newUser;
}

/**
 * Simule la connexion d'un utilisateur.
 * (Dans la vraie vie, on chercherait en BDD et on comparerait les hash).
 */
// ...
function connexion(email, password) {
   if (!email) {
    console.warn("[AUTH-VALIDATION] Email manquant.");
    return null;
  }
  console.log(`[AuthService] Tentative de connexion pour ${email}`);
  console.log(`[AUTH-LOG] Nouvelle tentative de awanecion pour ${email}`);
  // ...
// CORRECTION DU BUG : '===' (comparaison) au lieu de '=' (assignation)
if (email === "test@devtrack.com" && password === "password123") { 
  console.log("[AuthService] Connexion réussie.");
// ...
    return { token: "fake-jwt-token-for-dev" };
  }
// ...
  
  console.warn("[AuthService] Échec de la connexion: identifiants incorrects.");
  return null;
}

// On exporte les fonctions pour qu'elles puissent être testées (Module 6)
export { User, inscription, connexion };