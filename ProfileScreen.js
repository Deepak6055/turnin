import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  const user = {
    name: 'Deepak Ram',
    phone: '123-456-7890',
    address: '123 side St',
    email: 'hehehe@example.com',
    institution: 'PQR Corporation',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{user.name}</Text>

      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.value}>{user.phone}</Text>

      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>{user.address}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{user.email}</Text>

      <Text style={styles.label}>Institution:</Text>
      <Text style={styles.value}>{user.institution}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ProfileScreen;

