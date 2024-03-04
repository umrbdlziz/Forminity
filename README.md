# Forminity
a survey app for student

https://github.com/umrbdlziz/Forminity/assets/117342940/d918e1a6-cd50-4507-91d5-f4bdae70c787

## Run Locally

Clone the project

```bash
  git clone https://github.com/umrbdlziz/Forminity.git
```

Go to the project directory

```bash
  cd Forminity
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npx expo start
```

## Create a Build

Install the latest CLI

```bash
  npm install -g eas-cli
```

Log in to your expo account

```bash
  eas login
```

Configure the project

```bash
  eas build:configure
```

Run a build

```bash
  eas build -p android --profile preview
```

Run the latest build

```bash
  eas build:run -p android --latest
