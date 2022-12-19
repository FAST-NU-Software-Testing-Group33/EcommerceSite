<i>Authoured by: Hashir Sarwar</i>

Video games today are highly interactive with complex gaming mediums and coupled with several users consuming games over multiple platforms, which make these more susceptible to vulnerability, unexpected errors, and glitches. These might go unnoticed and unresolved without a proper testing mechanism. Hence, testing is crucial to avoid criticisms from gamers, losing out on significant sales due to poor experiences.

# How Game Testing is different from other Software Testing.

Testing games is a repetitive process every new build may have bugs and must be tested thoroughly.

All game testing follows a basic structure irrespective of the size of the game & time required for producing the game.

The Quality assurance professional needs to study game rules & requirements. Understand the overall game component architecture and file architecture, the flow, and the file structures and the dependencies associated with the game. With every new prototype of the game, the tests documents need to be frequently revisited to update any change in the specifications, new game testing test cases & new configuration support. A video game tester should ensure that no new issues were introduced.

Game Tester jobs involves:

- Classify the requirements based on the intended purpose and target audience.
- Identify the user and system requirement and should be classified into functional, nonfunctional, domain requirements
- Identify Testable items, Non-testable items, targets and measures for functional and nonfunctional requirements
- Check if the functional requirements are complete, consistent & comprehensible
- Identify customizable requirements, conflicting requirements
- Identify interdependent requirements is one of the game testing jobs.
- Prioritize the requirements based on the uniqueness, complexity, criticality
- Identify the theme of the game, Characters, Animation, AI, Cinematic, Camera view, gameplay

# Types of Game Testing

Below are the popular game testing techniques:

### 1. Functional Testing

Functionality QA testers look for the generic problems within the game or its user interface & graphics, such as game mechanic issues, stability issues, and game asset integrity. User interface testing ensures user-friendliness of the game

Example: Checking colors and backgrounds, menu structure, screen orientation and screen resolution, font size, alignment errors, usability, system navigation such as loading time, timeout and display, sorting, confirmation messages, sequences, animations and audio elements aspects of the game, instructions, and dialogue messages. User Interactions, User Interfaces, Transactions testing, Calibration and accuracy testing of mobile phone cameras, Screen resolutions, Mobile responsive design testing, Audio quality Testing

### 2. Compatibility Testing

Checking if the game is compatible across different devices, and on different configurations of hardware and software.

Example: Install and Uninstall the game on all supported consoles/desktops/mobiles.

### 3. Performance Testing

The overall performance of the Game is checked.	Performance tuning is performed to optimize game speed.

Importance parameters checked during performance testing

- Response time on client and servers, Transaction completion time(s), Peak load performance, Longevity, network coverage, Memory leakage, low memory, low battery, Time taken to download applications, simultaneous(Multiple users) access to application’s server, speed, throughput, reliability, scalability, etc.
- Battery Consumption and graphics performance: Measure the battery consumption of the mobile game. Battery Consumption must be optimum over long hours, and game responses should be satisfactory under varying heavy loads across different devices
- Processor and memory constraints: Performance counters are used to measure the CPU and memory consumption of the application.
- Network connectivity: Measures the response time of the mobile games on different network types (Wi-Fi, 2G, 3G, 4G), It gives an overall insight into how well the game will perform on unreliable networks. It also checks connectivity between mobile devices, data centers or the cloud. The whole Peak Times, Jittery Connections, Duplication of Data, Packet loss, Fragmentation of Data are monitored.
- Testing mobile games performance especially MMO

### 4. Conformance /Compliance Testing

Marketplace guidelines compliance (e.g., Apple App Store policies), Enterprise policy compliance (e.g., prohibited content. Compliance may also refer to regulatory bodies such as PEGI and ESRB. The game targets a particular content rating. If there is an objectionable content that is inappropriate for the desired rating, then they are identified and reported. Even a single violation in submission for license approval may have the game rejected, incurring additional costs in further testing and resubmission.

Example: If the game is to be published in European countries, test for PAL conversion if the game is produced for Northern America, test for NTSC conversions.
### 5. Localization testing

Localization testing becomes essential important when a game is targeted for the global markets. Game titles, content, and texts need to be translated and tested with devices in multiple languages. These types of tests can be performed quickly (with the help of cloud-based device access and test automation).

Example: Localization needs specific to MENA region (Middle East/North Africa), Arabic localization( Right-to-Left text support, Bi-Directional displays), Pseudo-localization testing, double-byte characters (for East Asian languages), local time/date, currency, address formats, and other local requirements.
### 6. Soak testing

This game automation testing involves leaving the game running for a prolonged period in various modes of operation. For example, idling paused, or at the title screen. Soaking can identify memory leaks or rounding errors.

Example: Game has begun, and the character is made to stand idle for 24 hours. This technique is used to detect crashes brought on by memory leaks and other faults in the game engine.
7) Recovery testing

In software, recovery testing checks how well the application can be recovered from crashes, hardware failures, and other similar failures. The application is forced to fail, and later it will be observed how it recovers from the failure conditions and the environment.

Example: While a gaming application is running, suddenly restart the gaming console, & check the validate the data integrity
### 8. Security testing

It is done to check how safe the software works from external threats. Data protection from external threats, uncontrolled system access restrictions, data breach, operating system ?aws, communication system ?aws and weak encryption algorithms.

Example: Changing a URL from /login to /play on a gaming site should not allow direct access to the games.
### 9. Other Games testing

Testing of real or virtual characters. In multiplayer video games, connectivity to the server and synchronization of game status are two critical areas to be tested.

Example: Multiplayer 3D racing games.

Testing new features such as game status updates, friend invitations, premium gift sharing, etc. This ensures rich gaming experience to the user.

Example: Facebook, Blogs

Sound Testing

Testing if there is an error in loading the files, listening to sound files for errors or distortions, CC profiler to analyze the color commentary

Database and game statistics

Database verification using debugging to investigate if the game is using the data correctly. Ensure that the data is loaded in the right place and shows the correct information
White-box testing

White Box Testing for Games focuses on the architectural, integration and system aspects of the mobile game.

- <b>Code Inspection:</b> Source code is reviewed, Program logic &common programming errors, compliance with coding standards are analyzed.
- <b>Focus Testing:</b> Chunks of codes are fed to the isolated modules, and the output is analyzed.
- <b>Data Analysis:</b> Data usage, interpretation, and manipulation are analyzed and validated for the different modules.
- <b>Path and Flow Testing:</b> Correct sequence of objects are executed.
- <b>Algorithm-specific testing:</b> Testing a particular game scenario or feature by setting data variables, data values to the code and executing it in the runtime environment.
- <b>Artificial Intelligence Analysis:</b> The run statistic of the programmable moves and plays of the AI component is generated. The result is validated to check if all the programmable moves are used. Example: side grip on the snowboard and plays(combination punch/kick in multidirectional action) are used.

# Getting started with the Unity Test Framework

UTF uses a Unity integration of the NUnit library, which is an open-source unit testing library for .Net languages.

To setup testing in Unity, you just need to follow the following simple steps:

- Go to Windows -> General and select "Test Runner" to open the test runner window.
- Create a "Test" folder preferably in the root directory.
- Select the test folder you just created and go to the "Play Mode" tab in test runner window and click "Create PlayMode Test Assembly Foler".
- Go to the folder created and click "Create Test Script in current folder".
- Add tests to the script.
- An example test that I added is:
```
[UnityTest]
public IEnumerator UpMovement()
{
   var gameObject = new GameObject();
   var player = gameObject.AddComponent<PlayerMovement>();
   player.Move(Vector3.up);
   yield return null;
   Assert.IsTrue(player.transform.position.y > 0);
}
```