# Forminity
a survey app for student

<video width="320" height="240" controls>
  <source src="https://youtu.be/267WypY3YWM" type="video/mp4">
  Your browser does not support the video tag.
</video>


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
