export async function fetchUserActivity(userId) {
    
    const response = await fetch(`http://localhost:3001/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error("Failed to fetch user activity");
    }
    const json = await response.json();
    return json.data; 
  }

export async function fetchUserPerformance(userId) {
    
    const response = await fetch(`http://localhost:3001/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error("Failed to fetch user performance");
    }
    const json = await response.json();
    return json.data; 
  }

 export async function fetchUserMain(userId) {
    
    const response = await fetch(`http://localhost:3001/user/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user main info");
    }
    const json = await response.json();
    return json.data; 
  }

  export async function fetchUserSession(userId) {
    
    const response = await fetch(`http://localhost:3001/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error("Failed to fetch user session");
    }
    const json = await response.json();
    return json.data; 
  }