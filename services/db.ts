import { Color } from "@/app/models/Color";
import * as SQLite from "expo-sqlite";
import { SQLiteDatabase } from "expo-sqlite";

const db = SQLite.openDatabaseSync("colors.db");

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<any>(
    "PRAGMA user_version",
  );
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS colors (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL);
            INSERT INTO colors (value) VALUES ('Green');
            INSERT INTO colors (value) VALUES ('Smarahd');
            INSERT INTO colors (value) VALUES ('Pink Gold');`);
    currentDbVersion = 1;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

export async function addItem(value: string): Promise<Color> {
  const result = await db.runAsync(`INSERT INTO colors (value) VALUES (?);`, [
    value,
  ]);
  return { id: result.lastInsertRowId, value } as Color;
}

export async function deleteItem(id: number) {
  await db.runAsync(`DELETE FROM colors where id = ?;`, [id]);
}

export async function updateItem(item: Color) {
  await db.runAsync(`UPDATE colors set value = ? where id = ?;`, [
    item.value,
    item.id,
  ]);
}

export async function getItems() {
  return await db.getAllAsync<Color>("SELECT * FROM colors;");
}
