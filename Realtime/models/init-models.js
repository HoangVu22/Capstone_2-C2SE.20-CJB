var DataTypes = require("sequelize").DataTypes;
var _bank_accounts = require("./bank_accounts");
var _failed_jobs = require("./failed_jobs");
var _favor_user = require("./favor_user");
var _favors = require("./favors");
var _friends = require("./friends");
var _images = require("./images");
var _members = require("./members");
var _messages = require("./messages");
var _migrations = require("./migrations");
var _ordereds = require("./ordereds");
var _password_reset_tokens = require("./password_reset_tokens");
var _personal_access_tokens = require("./personal_access_tokens");
var _personal_tours = require("./personal_tours");
var _rooms = require("./rooms");
var _tours = require("./tours");
var _transactions = require("./transactions");
var _trip_plans = require("./trip_plans");
var _ts_profiles = require("./ts_profiles");
var _user_profiles = require("./user_profiles");
var _users = require("./users");

function initModels(sequelize) {
  var bank_accounts = _bank_accounts(sequelize, DataTypes);
  var failed_jobs = _failed_jobs(sequelize, DataTypes);
  var favor_user = _favor_user(sequelize, DataTypes);
  var favors = _favors(sequelize, DataTypes);
  var friends = _friends(sequelize, DataTypes);
  var images = _images(sequelize, DataTypes);
  var members = _members(sequelize, DataTypes);
  var messages = _messages(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var ordereds = _ordereds(sequelize, DataTypes);
  var password_reset_tokens = _password_reset_tokens(sequelize, DataTypes);
  var personal_access_tokens = _personal_access_tokens(sequelize, DataTypes);
  var personal_tours = _personal_tours(sequelize, DataTypes);
  var rooms = _rooms(sequelize, DataTypes);
  var tours = _tours(sequelize, DataTypes);
  var transactions = _transactions(sequelize, DataTypes);
  var trip_plans = _trip_plans(sequelize, DataTypes);
  var ts_profiles = _ts_profiles(sequelize, DataTypes);
  var user_profiles = _user_profiles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  favor_user.belongsTo(favors, { as: "favor", foreignKey: "favor_id"});
  favors.hasMany(favor_user, { as: "favor_users", foreignKey: "favor_id"});
  transactions.belongsTo(ordereds, { as: "ordered", foreignKey: "ordered_id"});
  ordereds.hasMany(transactions, { as: "transactions", foreignKey: "ordered_id"});
  members.belongsTo(rooms, { as: "room", foreignKey: "room_id"});
  rooms.hasMany(members, { as: "members", foreignKey: "room_id"});
  messages.belongsTo(rooms, { as: "room", foreignKey: "room_id"});
  rooms.hasMany(messages, { as: "messages", foreignKey: "room_id"});
  personal_tours.belongsTo(rooms, { as: "room", foreignKey: "room_id"});
  rooms.hasMany(personal_tours, { as: "personal_tours", foreignKey: "room_id"});
  images.belongsTo(tours, { as: "tour", foreignKey: "tour_id"});
  tours.hasMany(images, { as: "images", foreignKey: "tour_id"});
  ordereds.belongsTo(tours, { as: "tour", foreignKey: "tour_id"});
  tours.hasMany(ordereds, { as: "ordereds", foreignKey: "tour_id"});
  trip_plans.belongsTo(tours, { as: "tour", foreignKey: "tour_id"});
  tours.hasMany(trip_plans, { as: "trip_plans", foreignKey: "tour_id"});
  tours.belongsTo(ts_profiles, { as: "t", foreignKey: "ts_id"});
  ts_profiles.hasMany(tours, { as: "tours", foreignKey: "ts_id"});
  bank_accounts.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(bank_accounts, { as: "bank_accounts", foreignKey: "user_id"});
  favor_user.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(favor_user, { as: "favor_users", foreignKey: "user_id"});
  friends.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(friends, { as: "friends", foreignKey: "user_id"});
  friends.belongsTo(users, { as: "friend", foreignKey: "friend_id"});
  users.hasMany(friends, { as: "friend_friends", foreignKey: "friend_id"});
  members.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(members, { as: "members", foreignKey: "user_id"});
  messages.belongsTo(users, { as: "from", foreignKey: "from_id"});
  users.hasMany(messages, { as: "messages", foreignKey: "from_id"});
  messages.belongsTo(users, { as: "to", foreignKey: "to_id"});
  users.hasMany(messages, { as: "to_messages", foreignKey: "to_id"});
  ordereds.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(ordereds, { as: "ordereds", foreignKey: "user_id"});
  personal_tours.belongsTo(users, { as: "owner", foreignKey: "owner_id"});
  users.hasMany(personal_tours, { as: "personal_tours", foreignKey: "owner_id"});
  rooms.belongsTo(users, { as: "room_owner_user", foreignKey: "room_owner"});
  users.hasMany(rooms, { as: "rooms", foreignKey: "room_owner"});
  ts_profiles.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(ts_profiles, { as: "ts_profiles", foreignKey: "user_id"});
  user_profiles.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_profiles, { as: "user_profiles", foreignKey: "user_id"});

  return {
    bank_accounts,
    failed_jobs,
    favor_user,
    favors,
    friends,
    images,
    members,
    messages,
    migrations,
    ordereds,
    password_reset_tokens,
    personal_access_tokens,
    personal_tours,
    rooms,
    tours,
    transactions,
    trip_plans,
    ts_profiles,
    user_profiles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
