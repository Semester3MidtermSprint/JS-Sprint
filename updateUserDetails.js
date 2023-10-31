let users = [
  { username: "john123", email: "john@example.com", phone: "1234567890" },
  { username: "jane456", email: "jane@example.com", phone: "9876543210" },
  // ... more user records
];

// Function to add/update user email and phone number
function updateUserDetails(username, email, phone) {
  // Check if user already exists
  const userIndex = users.findIndex((user) => user.username === username);

  if (userIndex !== -1) {
    // User exists, update email and phone
    users[userIndex].email = email;
    users[userIndex].phone = phone;
  } else {
    // User does not exist, create a new user object
    const newUser = { username, email, phone };
    users.push(newUser);
  }

  console.log(`User ${username} details updated successfully.`);
}

// Example usage
updateUserDetails("john123", "newemail@example.com", "5555555555");
